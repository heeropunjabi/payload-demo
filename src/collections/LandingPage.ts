import { CollectionConfig } from 'payload/types';

const LandingPage: CollectionConfig = {
  slug: 'landingPage',
  auth: true,
  admin: {
    //useAsTitle: 'email',
    defaultColumns: ['label', 'defaultEnglishLabel', 'displayed', 'description', 'page'],
      
  },
    
    fields: [{
        name: 'label',
        type: 'text',
    },
        {
            name: 'defaultEnglishLabel',
            type: 'text',
            localized: true,

        },
        {
            name: 'displayed',
            type: 'text',
            localized: true,

        },

        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'page',
            type: 'text',
        }
    ],
    versions: {
        maxPerDoc: 10,
        drafts: true,

    }
};

export default LandingPage;