import html2canvas from "html2canvas";

import jsPDF from "jspdf";

export const downloadPDF = page => {

    html2canvas(page).then(function (canvas) {

        canvas2PDF(canvas);

    });

};

const canvas2PDF = canvas => {

    let contentWidth = canvas.width;

    let contentHeight = canvas.height;

    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高

    let imgWidth = 595.28;

    let imgHeight = 592.28 / contentWidth * contentHeight;

    //let imgHeight = 700/contentWidth * contentHeight;

    //一页pdf显示html页面生成的canvas高度;

    var pageHeight = contentWidth / 592.28 * 841.89;

    let totalHeight = contentHeight;

    // 第一个参数： l：横向  p：纵向

    // 第二个参数：测量单位（"pt"，"mm", "cm", "m", "in" or "px"）

    let pdf = new jsPDF("p", "pt");

    let position = 0;

    //   pdf.addImage(

    //     canvas.toDataURL("image/jpeg", 1.0),

    //     "JPEG",

    //     0,

    //     0,

    //     imgWidth,

    //     imgHeight

    //   );

    if (totalHeight < pageHeight) {

        pdf.addImage( canvas.toDataURL("image/jpeg", 1.0), 'JPEG', 0, 0, imgWidth, imgHeight);

    } else {    

        while (totalHeight > 0) {

            pdf.addImage( canvas.toDataURL("image/jpeg", 1.0), 'JPEG', 0, position, imgWidth, imgHeight)

            totalHeight -= pageHeight;

            position -= 841.89;

            //避免添加空白页

            if (totalHeight > 0) {

                pdf.addPage();

            }

        }

    }

    // pdf.addImage(

    //     canvas.toDataURL("image/jpeg", 1.0),

    //     "JPEG",

    //     0,

    //     position,

    //     imgWidth,

    //     imgHeight

    // );


 

    pdf.save("导出.pdf");

};