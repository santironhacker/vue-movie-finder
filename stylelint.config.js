module.exports = {
  processors: [
    ["@mapbox/stylelint-processor-arbitrary-tags", { fileFilterRegex: [/\.vue$/] }]
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "include"
        ]
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
};