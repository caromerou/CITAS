function generarPDF() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let documentoIdentidad = document.getElementById('documentoIdentidad').value;

    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(15, 15, 'Agregar citas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 40, 'nombre: ' + nombre);
    documentoPDF.text(20, 50, 'apellido: ' + apellido);
    documentoPDF.text(20, 60, 'documentoIdentidad: ' + documentoIdentidad);
    documentoPDF.save('SFWFQFQFEWF');
    }

