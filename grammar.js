module.exports = grammar({
    name: 'Zettelkasten',

    rules: {
        source_file: $ => repeat($._markdown_definition),

        _markdown_definition: $ => choice(
            $.link,
            $._junk
        ),

        link: $ => seq(
            '[[',
            alias($._text, $.text),
            ']]'
        ),

        _LF: $ => "\n",
        _junk: $ => seq($._text, $._LF),
        _text: $ => prec.left(2,repeat1($._word)),

        _word: $ =>  /\w+/,

    }
});
