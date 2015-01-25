$.widget("counter", {
    options: {
        minusSelector: "counter-minus",
        plusSelector: "counter-plus",
        inputSelector: "counter-input",
        minValue: 0,
        maxValue: Infinity,
        step: 1
    },
    _create: function () {
        var $this = this.element;
        //TODO namespace
        this.$minus = $(this.options.minusSelector, $this);
        this.$plus = $(this.options.plusSelector, $this);
        this.$input = $(this.options.inputSelector, $this);
    },
    _init: function () {
        var initValue = Number(this.$input.value());
        var minValue = Number(this.options.minValue);
        var maxValue = Number(this.options.maxValue);

        this._value = isNaN(initValue) ? 0 : initValue;
        this._minValue = isNaN(minValue) ? 0 : minValue;
        this._maxValue = isNaN(maxValue) ? Infinity : maxValue;

        this._initEvent();
    },
    _initEvent: function () {
        var step = Number(this.options.step);
        step = isNaN(step) ? 1 : step;
        this.$plus.tap(function () {
            this.value(this._value + setp);
        });
        this.$minus.tap(function () {
            this.value(this._value - setp);
        });
    },
    value: function (n) {
        var value;
        var oldValue;
        var eventData;

        if (arguments.length > 0) {

            value = Number(n);
            oldValue = this._value;
            eventData = {
                oldValue: oldValue,
                newValue: newValue
            };

            if (isNaN(value) || value < this._minValue || value > this._maxValue) {
                return;
            }

            if (this._trigger("beforeupdate", eventData)) {

                this.$input.value(value);
                this._value = value;

                this._trigger("update", eventData);
            }
        } else {
            return this._value;
        }
    }
});
