var inputs = document.querySelectorAll('input');
[].forEach.call(inputs, function(el) {
    if (el.dataset && el.dataset.length) {
        var max = parseInt(el.dataset.length, 10);
        el.addEventListener('keyup', function() {
            if (this.value.length >= max) focusNext(this, inputs)
        });
    }
});

function focusNext(el, els) {
    var match;
    console.log(el)
    for (var i = 0; i < els.length; i++) {
        if (match) {
            els[i].focus();
            break;
        }
        match = els[i] == el;
    }
};