module.exports = `
<!-- kit stylesheets -->
{% capture kit_chunked_styles %}<!-- styles -->{% endcapture %}{% if kit_chunked_styles contains 'critical' %}<!-- critical-main -->{% else %}<!-- non-critical-main -->{% endif %}{{ kit_chunked_styles }}
`
