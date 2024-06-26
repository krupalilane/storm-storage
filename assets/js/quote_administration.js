var TableDatatablesResponsive = function () {
    var initProjectsTable = function () {
        var table = $('#quotes');

        var oTable = table.dataTable({
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "No quotes to list",
                "info": "Showing _START_ to _END_ of _TOTAL_ quotes",
                "infoEmpty": "No quotes found",
                "infoFiltered": "(filtered1 from _MAX_ total quotes)",
                "lengthMenu": "_MENU_ quotes",
                "search": "Search:",
                "zeroRecords": "No matching quotes found"
            },

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // setup buttons extentension: http://datatables.net/extensions/buttons/
            buttons: [
                { extend: 'print', className: 'btn dark' },
                { extend: 'pdf', className: 'btn red' },
                { extend: 'excel', className: 'btn grey-mint' }
            ],

            // setup responsive extension: http://datatables.net/extensions/responsive/


            "order": [
                [5, 'desc']
            ],
            
            "lengthMenu": [
                [10, 20, 50, 100, -1],
                [10, 20, 50, 100, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 20,

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }  
    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }
            initProjectsTable();
        }
    };
}();

jQuery(document).ready(function() {
    TableDatatablesResponsive.init();
});
jQuery(document).ready(function() {          
    $('a.delete_quote_button').click(function(){
        var quotename =  $(this).data('quotename');
        var quoteid = $(this).data('quoteid');
        bootbox.confirm({
            title: "<i class='fa fa-cube'></i></span>&nbsp;Delete Quote?",
            message: "Are you sure that you want to delete the quote <strong>"+quotename+"</strong>?<br><br>This will permanently delete this quote and cannot be undone.",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel',
                    className: 'btn dark'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Confirm',
                    className: 'btn red'
                }
            },
            callback: function (result) {
                if(result === true) {
                    $.ajax({
                        url: delete_quote_url,
                        type: 'POST',
                        data: { quote_id: quoteid },
                        success: function (result) {
                            toastr.success('Quote deleted successfully.');
                            setTimeout(() => {
                                window.location.href = quote_admin_url;
                            }, 2000)
                        }
                    });
                }
                else {
                    $('.bootbox.modal').modal('hide');
                }
            }
        });
    }); 
});