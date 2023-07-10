import path from 'path';
import { buildConfig } from 'payload/config';

import LandingPage from './collections/LandingPage';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    LandingPage,
    Users,
    // Add Collections here
    // Examples,
  ],
  localization: {
    locales: [
      'en',
      'fr',
    ],
    defaultLocale: 'en',
    fallback: false,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
