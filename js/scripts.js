(function() {

    var pricing = {

        'tier1': [
            '$2.90',
            '$2.65',
            '$2.45',
            '$2.10',
            '$1.60',
            '$1.15',
            '$0.80'
        ],
        'tier2': [
            '$4.75',
            '$4.05',
            '$3.20',
            '$2.20',
            '$2.20',
            '$2.05',
            '$1.85'
        ],
        'tier3': [
            '$6.85',
            '$5.50',
            '$4.65',
            '$3.65',
            '$3.65',
            '$3.50',
            '$3.20'
        ]
    };


    $('.pricing-levels .tier').on('click', function() {
        $(this).parent().find('.tier').removeClass('selected');
        $(this).addClass('selected');
        
        var tierPrices = pricing[$(this).data('tier')],
            tierSMU = $('.pricing-table tbody tr td:first-child');

        tierSMU.each(function(index, el) {
            $(el).text(tierPrices[index]);
        });

    })

    $('.nav_wrapper').smint({
        'scrollSpeed' : 1000,
    });
    $('.gallery-images').galereya({
        load: function(next) {
            $.getJSON('images.json', function(data) {
                next(data);
            });
        }
    });        

}())