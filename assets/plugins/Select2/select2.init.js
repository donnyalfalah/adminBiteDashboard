
$(".select2").select2();






$("#select2-max-length").select2({
    maximumSelectionLength: 3,
    placeholder: "Select only maximum 3 items"
});


$("#select2-with-tags").select2({
    tags: true
});


$("#select2-with-tokenizer").select2({
    tags: true,
    tokenSeparators: [',', ' ']
});



$("#select2-rtl-multiple").select2({
    placeholder: "RTL Select",
    dir: "rtl"
});


