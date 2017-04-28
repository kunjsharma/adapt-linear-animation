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
            var scolevel0 = this;
            var delay = Number(this.model.get('_delay'));
            var isie8 = $('html').hasClass('ie8') || $('html').hasClass('ie7');
            this.$(".linear-animation-widget").bind('inview', function (event, visible) {
                if (visible == true) {
                    if (isie8) {
                        scolevel0.$(".linear-animation-item-frame img").css({
                            "opacity": "1",
                            "position": "absolute"
                        });
                        scolevel0.setCompletionStatus();
                        return;
                    } else {
                        var $item = $(this).find('.linear-animation-item');
                        //var $item = $('.linear-animation-item');
                        var slideCount = $item.length;
                        $item.each(function (index) {
                            var scoLevel1 = this;
                            $(this).children(".linear-animation-item-text").delay(delay * index).animate({
                                opacity: 1
                            }, 500, function () {
                                $(scoLevel1).children(".linear-animation-item-frame").delay(50).animate({
                                    opacity: 1
                                }, 500, function () {
                                    if (index == (slideCount - 1)) {
                                        scolevel0.setCompletionStatus();
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
