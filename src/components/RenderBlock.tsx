'use client'

import React, { useEffect, useRef } from 'react'
import Matter, { Engine, Bodies, World, Body } from 'matter-js'
import p5 from 'p5'
import { useRouter } from 'next/navigation'
import topic from '@/utils/topic'

const RenderBlock = () => {
  const scene = useRef<HTMLDivElement | null>(null)
  const engine = useRef(Engine.create())
  const router = useRouter()

  useEffect(() => {
    if (scene.current === null) return console.log('scene is null')

    const cw = scene.current.clientWidth
    const ch = scene.current.clientHeight
    let words: { word: string; body: Matter.Body; show: () => void }[] = []

    const sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(cw, ch)

        // x, y, width, height, [options]
        World.add(engine.current.world, [
          Bodies.rectangle(cw / 2, ch - 25, cw, 10, { isStatic: true }), // Bottom wall
          Bodies.rectangle(cw / 2, 10, cw, 10, { isStatic: true }), // Top wall
          Bodies.rectangle(10, ch / 2, 10, ch, { isStatic: true }), // Left wall
          Bodies.rectangle(cw - 10, ch / 2, 10, ch, { isStatic: true }), // Right wall
        ])
      }

      class Word {
        word: string
        body: Matter.Body
        constructor(x: number, y: number, word: string) {
          this.body = Bodies.rectangle(x, y, word.length * 10, 40)
          this.word = word
          World.add(engine.current.world, this.body)

          return this
        }
        show() {
          let pos = this.body.position
          let angle = this.body.angle

          p.push()
          p.translate(pos.x, pos.y)
          p.rotate(angle)
          p.rectMode(p.CENTER)
          p.fill(255)
          p.stroke('#0f0f0f')
          p.rect(0, 0, this.word.length * 20 + 40, 50, 60)
          p.noStroke()
          p.fill('#0f0f0f')
          p.textSize(20)
          p.textAlign(p.CENTER, p.CENTER)
          p.text(this.word, 0, 0)
          p.pop()
        }
      }

      for (let w of topic) {
        words.push(new Word(p.random(0, cw), p.random(0, ch), w))
      }

      p.draw = () => {
        p.background(255)
        Engine.update(engine.current)
        for (let word of words) {
          word.show()
        }
      }

      p.mouseMoved = () => {
        for (let word of words) {
          let d = p.dist(
            p.mouseX,
            p.mouseY,
            word.body.position.x,
            word.body.position.y
          )

          if (d < 50) {
            Body.applyForce(
              word.body,
              { x: word.body.position.x, y: word.body.position.y },
              { x: p.random(-0.08, 0.08), y: p.random(-0.08, 0.08) }
            )
            Body.nextGroup(true)
          }
        }
      }
      p.mousePressed = () => {
        for (let word of words) {
          let d = p.dist(
            p.mouseX,
            p.mouseY,
            word.body.position.x,
            word.body.position.y
          )

          if (d < 50) {
            router.push(`/blog/search?q=${word.word}`)
          }
        }
      }
    }, scene.current!)

    return () => {
      World.clear(engine.current.world, false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Engine.clear(engine.current)
      sketch.remove()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={scene} className=" h-[80vh]" />
}

export default RenderBlock
