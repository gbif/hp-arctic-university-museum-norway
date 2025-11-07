var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "objekter/sog"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "locale": "en",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "NATURAL",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "false",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "publishingOrg",
      "value": "689b40c4-ff31-4cd0-83a5-a7a828f1cd92"
    },
    "mapSettings": {
      "lat": 0,
      "lng": 0,
      "zoom": 0
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
}

// example of a language specific route overwrite
if (pageLang === 'en') {
  siteConfig.pages = {
    "id": "occurrenceSearch",
    "path": "occurrence/search"
  }

}