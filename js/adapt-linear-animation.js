/*
 * adapt-linear-animation
 * License - 
 * Maintainers - Kunj B Sharma <kunjsharma@hotmail.com>
 */
define(function (require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');
    var Handlebars = require('handlebars');
    var LinearAnimation = ComponentView.extend({
        preRender: function () {
            //OUR HBS template requires this helper
            if (Handlebars.helpers && !('ifvalue' in Handlebars.helpers)) {
                Handlebars.registerHelper('ifvalue', function (conditional, options) {
                    if (options.hash.value === conditional) {
                        return options.fn(this)
                    } else {
                        return options.inverse(this);
                    }
                });
            }
        },
        postRender: function () {
            this.setReadyStatus();
            if (this.model.get('_animation') == false) {
                this.$(".linear-animation-item-frame").css({
                    "opacity": 1
                });
                this.setCompletionStatus();
                return;
            }
            var _oScoLevel0 = this, _nDelay = Number(this.model.get('_delay')), _bIsIE8 = $('html').hasClass('ie8') || $('html').hasClass('ie7');
            this.$(".linear-animation-widget").bind('inview', function (event, visible) {
                if (visible == true) {
                    if (_bIsIE8) {
                        _oScoLevel0.$(".linear-animation-item-frame img").css({
                            "opacity": "1",
                            "position": "absolute"
                        });
                        _oScoLevel0.setCompletionStatus();
                        return;
                    } else {
                        var _eItem = $(this).find('.linear-animation-item');
                        //var _eItem = $('.linear-animation-item');
                        var slideCount = _eItem.length;
                        _eItem.each(function (index) {
                            var _oScoLevel1 = this;
                            $(this).children(".linear-animation-item-text").delay(_nDelay * index).animate({
                                opacity: 1
                            }, 500, function () {
                                $(_oScoLevel1).children(".linear-animation-item-frame").delay(50).animate({
                                    opacity: 1
                                }, 500, function () {
                                    if (index == (slideCount - 1)) {
                                        _oScoLevel0.setCompletionStatus();
                                    }
                                });
                            });
                        });
                    }
                }
            });
        }
    });
    Adapt.register("linear-animation", LinearAnimation);
});
