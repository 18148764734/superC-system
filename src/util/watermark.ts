export const getmark = () => {
    const removeWater = () => {

        const id = "1.23452384164.123412416";
        if (document.getElementById(id) !== null) {
            console.log(document.getElementById(id))
            var element = document.getElementById(id);
            element?.remove();
            document.body.removeChild(document.getElementById(id)!);

        }
    }
    const setWatermark = (userName: any,phone:any,time:any) => {

        const id = "1.23452384164.123412416";




        if (document.getElementById(id) !== null) {

            document.body.removeChild(document.getElementById(id)!);

        }




        //创建一个画布

        const can = document.createElement("canvas");

        //设置画布的长宽

        can.width = 300;

        can.height = 220;




        const cans = can.getContext("2d")!;

        //旋转角度

        cans.rotate((-15 * Math.PI) / 180);

        cans.font = "11px Vedana";

        //设置填充绘画的颜色、渐变或者模式

        cans.fillStyle = "rgba(200, 200, 200, 0.40)";

        //设置文本内容的当前对齐方式

        cans.textAlign = "left";

        //设置在绘制文本时使用的当前文本基线

        // cans.textBaseline = "Middle";

        //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）

        cans.fillText(userName, 20, 100);
        cans.fillText(phone, 20, 120);
        cans.fillText("时 空 坐 标 原 命 局 决 策 系 统 出 品", 20, 140);
        cans.fillText("版 权 归 时 空 坐 标 所 有", 20, 160);
        cans.fillText(time, 20, 180);




        const div = document.createElement("div");

        div.id = id;

        div.style.pointerEvents = "none";

        div.style.top = "30px";

        div.style.left = "0px";

        div.style.position = "fixed";

        div.style.zIndex = "100000";

        div.style.width = document.documentElement.clientWidth + "px";

        div.style.height = document.documentElement.clientHeight + "px";

        div.style.background =

            "url(" + can.toDataURL("image/png") + ") left top repeat";

            if(userName=="111"){
                const div1 = document.createElement("div");
                document.body.appendChild(div1);
            }else{
                document.body.appendChild(div);
            }

        return id;

    };




    // 该方法只允许调用一次

    const watermark = (userName: string,phone:string,time:string) => {

        let id = setWatermark(userName,phone,time);

        setInterval(() => {

            if (document.getElementById(id) === null) {

                id = setWatermark(userName,phone,time);

            }

        }, 500);

        // window.onresize = () => {

        //     setWatermark(userName,phone,time);

        // };

    };

    return { watermark,removeWater };

};