$(document).ready(function(){
    $('.popup').hide()
    $('#add').click(function () {
        $('.popup').show()
    })

    $('#btn-submit').click(function () {
        $('.popup').hide()
        let name = $('#name').val();
        let father = $('#father').val();
        let bod = $('#Bod').val();
        let address = $('#Address').val();
        let district = $('#District').val();
        let PinCode = $('#PinCode').val();

        $('#name').val('');
        $('#father').val('');
        $('#Bod').val('');
        $('#Address').val('');
        $('#District').val('');
        $('#PinCode').val('');
        // let row = '<tr><td>'+name+'</td><td>'+father+'</td></tr>'
        let row = '<tr><td>' + name + '</td><td>' + father + '</td><td>' + bod + '</td><td>' + address + '</td><td>' + district + '</td><td>' + PinCode + '</td><td> <button><i class="fa fa-trash" id="icn_delet"></i>Deleted</button></td><td> <button><i class="fa fa-edit hello"></i>Editor</button></td></tr>'
        $('#table').append(row);


    })

    
    $(document).on('click', '.hello', function () {
        $("#edit-pupop")

    });

   
 
})