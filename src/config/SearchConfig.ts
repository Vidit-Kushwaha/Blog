export const SearchConfig = {
  includeScore: true,
  keys: [
    { name: 'headline', weight: 0.3 },
    { name: 'description', weight: 0.2 },
    { name: 'articleBody', weight: 0.5 },
  ],
  useExtendedSearch: true,
  threshold: 0.4,
}


export const FeaturedSearchConfig = {
  includeScore: true,
  keys: [
    { name: 'headline', weight: 0.4 },
    { name: 'description', weight: 0.1 },
    { name: 'keywords', weight: 0.5 },
  ],
  useExtendedSearch: true,
  threshold: 0.4,
  limit : 3
}