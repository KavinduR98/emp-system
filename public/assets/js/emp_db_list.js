console.log('employee-db-js-file-loading');

$(document).ready(function () {

    $('#btnPrint').on('click', function () {

        $.ajax({
            type: 'GET',
            url: 'print_emp_all_data',
            data: {

            },
            async: false,
            success: function(response){
                if (response) {
                    makePage(response,'PRINT');
                }
            }, error: function(data){
                console.log('something went wrong');
            }
        });
    });
    $('#btnexport').on('click', function () {

        $.ajax({
            type: 'GET',
            url: 'print_emp_all_data',
            data: {

            },
            async: false,
            success: function(response){
                if (response) {
                    makePage(response,'EXPORT');
                }
            }, error: function(data){
                console.log('something went wrong');
            }
        });
    });

});

function makePage(result,flag) {
    var Title = [
        { text: '\n' },
        { text: 'Employee Management System', alignment: 'center' },
    ];


    var Header = [
        {
            // logo: {
            //     path: 'assets/media/image/srilankan.png',
            //     width: 50,
            //     height: 30,
            //     alignment: 'left',
            // },
            content: [
                { text: 'Employee Details', fontSize: 10, alignment: 'left' ,margin: [ 0, 0, 0, 10 ]},

            ]
        }
    ]


    var Body = [
        {
            table: {
                widths: ['*','*','*','*','*'],
                headerRows: 1,
                body: reportBody(result),

            },
            margin: [0, 0],
        },
    ];



    var Footer = [
        {
            color: 'red',
            fontSize: 8,
            alignment: 'center',
            margin: [0, 0]
        }
    ];

    var page = new Page();
    page.setTitle(Title);
    page.setHeader(Header, Page.EVERY);
    page.setBody(Body);
    page.setFooter(Footer);
    if (flag == 'EXPORT') {
        page.export();
    } else if (flag == 'PRINT') {
        page.preview();
    }

}

function reportBody(result) {
    
    var body = [];
    body.push([
        { text: 'Name', fontSize: 6, bold: true, alignment: 'center', border: [true, true, true, true] },
        { text: 'Address', fontSize: 6, bold: true, alignment: 'center', border: [true, true, true, true] },
        { text: 'Date of Birth', fontSize: 6, bold: true, alignment: 'center', border: [true, true, true, true] },
        { text: 'Joined Date', fontSize: 6, bold: true, alignment: 'center', border: [true, true, true, true] },
        { text: 'Phone Number', fontSize: 6, bold: true, alignment: 'center', border: [true, true, true, true] },
    ]);

    var result = result;
    
    for(i=0 ; i<result.length ; i++){

        body.push([
            { text:  result[i]['e_name'], fontSize: 6, bold: true, alignment: 'center', border: [false, false, false, true] },
            { text:  result[i]['e_address'], fontSize: 6, bold: true, alignment: 'center', border: [false, false, false, true] },
            { text:  result[i]['e_dob'], fontSize: 6, bold: true, alignment: 'center', border: [false, false, false, true] },
            { text:  result[i]['e_joined_date'], fontSize: 6, bold: true, alignment: 'center', border: [false, false, false, true] },
            { text:  result[i]['e_phone_number'], fontSize: 6, bold: true, alignment: 'center', border: [false, false, false, true] },
        ]);
    }


    return body;
}