

export default {
    // $FOO (?<!\\)\$(\w+)
    // ${FOO} (?<!\\)\${(\w+)}
    // {{FOO}} (?<!\\){{(\w+)}}
    regexps: {
        shell: /(?<!\\)\$(\w+)/gi,
        js: /(?<!\\)\${(\w+)}/gi,
        uni: /(?<!\\){{(\w+)}}/gi,
        complex: /(?<!\\)\$(\w+)|(?<!\\)\${(\w+)}|(?<!\\){{(\w+)}}/gi
    }
}