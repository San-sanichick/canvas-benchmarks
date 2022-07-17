import randomColor from "@/utils/randomColor";
import type { CanvasKit, Canvas, FontMgr, Paragraph } from "canvaskit-wasm";
import WasmShape from "./WasmShape";

export default class WasmText extends WasmShape {
    
    private text: string = "Hello world";
    private paragraph: Paragraph;
    
    constructor(x: number, y: number, kit: CanvasKit, fontMgr: FontMgr) {
        super(x, y, kit);

        const paragraphStyle = new kit.ParagraphStyle({
            textStyle: {
                fontFamilies: ["Roboto"],
                fontSize: 40,
                color: kit.parseColorString(randomColor())
            },
            textAlign: kit.TextAlign.Left
        });

        const builder = kit.ParagraphBuilder.Make(paragraphStyle, fontMgr);
        builder.addText(this.text);
        this.paragraph = builder.build();
        this.paragraph.layout(100)
        builder.delete();
    }

    // public update()

    public render(kit: CanvasKit, canvas: Canvas): void {
        // throw new Error("Method not implemented.");
        canvas.drawParagraph(this.paragraph, this.pos.x, this.pos.y);
    }

}