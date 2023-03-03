module.exports = [
  // tests without template content rules
  'block-lang',
  'no-restricted-call-after-await',
  'script-indent',
  'component-api-style',
  'component-definition-name-casing',
  'component-options-name-casing',
  'component-tags-order',
  'experimental-script-setup-vars',
  'jsx-uses-vars',
  'multi-word-component-names',
  'name-property-casing',
  'new-line-between-multi-line-property',
  'next-tick-style',
  'no-arrow-functions-in-watch',
  'no-async-in-computed-properties',
  'no-boolean-default',
  'no-computed-properties-in-data',
  'no-deprecated-data-object-declaration',
  'no-deprecated-destroyed-lifecycle',
  'no-deprecated-events-api',
  'no-deprecated-vue-config-keycodes',
  'no-dupe-keys',
  'no-empty-component-block',
  'no-export-in-script-setup',
  'no-expose-after-await',
  'no-invalid-model-keys',
  'no-lifecycle-after-await',
  'no-multiple-slot-args',
  'no-potential-component-option-typo',
  'no-ref-as-operand',
  'no-reserved-props',
  'no-restricted-block',
  'no-restricted-component-options',
  'no-restricted-props',
  'no-setup-props-destructure',
  'no-shared-component-data',
  'no-side-effects-in-computed-properties',
  'no-watch-after-await',
  'one-component-per-file',
  'order-in-components',
  'prefer-import-from-vue',
  'prop-name-casing',
  'require-valid-default-prop',
  'require-default-prop',
  'require-direct-export',
  'require-explicit-emits',
  'require-expose',
  'require-name-property',
  'require-prop-types',
  'require-prop-type-constructor',
  'require-render-return',
  'require-slots-as-functions',
  'return-in-computed-property',
  'return-in-emits-validator',
  'valid-define-emits',
  'valid-define-props',
  'valid-next-tick',
  // HTML-specific rules
  'html-closing-bracket-spacing',
  'html-closing-bracket-newline',
  // 'html-comment-content-newline',
  // 'html-comment-content-spacing',
  // 'html-comment-indent',
  'html-end-tags',
  'html-indent', // mixed indentation is actually a pug parsing error, but this rule does a lot more
  'html-self-closing', // might explode since it checks svgs and things?
  'multiline-html-element-content-newline',
  'singleline-html-element-content-newline'
]
