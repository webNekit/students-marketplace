import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { tag } from './schemas/tag'
import { article } from './schemas/article'
import { postCategory } from './schemas/postCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, postCategory, tag, article],
}
