$(document).ready(
        function() {
         
            Stripe.setPublishableKey('pk_test_leqOWNi8O7vansDwzboD8Ly9');
            var stripeResponseHandler = function(status, response) {
                var $form = $('#payment-form');
                if (response.error) {
                    $form.find('.payment-errors').text(
                        response.error.message);
                    $form.find('button').prop('disabled', false);
                } else {
                    var token = response.id;
                    $form
                        .append($(
                                '<input type="hidden" name="stripeToken" />')
                            .val(token));
                    $form.get(0).submit();
                }
            };

            $('#payment-form').submit(function(e) {
                var $form = $(this);
               // $form.find('button').prop('disabled', true);
                Stripe.card.createToken($form, stripeResponseHandler);
                return false;
            });

        });