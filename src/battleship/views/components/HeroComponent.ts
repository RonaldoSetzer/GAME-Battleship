import { Colors } from "../../utils/Colors";
import { MagicValues } from "./../../utils/MagicValues";
import { PixiFactory } from "./../../utils/PixiFactory";
import { Container, Graphics } from "pixi.js";
export class HeroComponent extends Container {
    private _background: Container;
    private _field: Container;
    private _type: string;
    private _shiphHPs: any[];
    public get doubleTexts(): any[] {
        return this._shiphHPs;
    }
    public get type(): string {
        return this._type;
    }

    public get field(): Container {
        return this._field;
    }

    public get background(): Container {
        return this._background;
    }

    constructor(type: string) {
        super();
        this._type = type;

        this.setupBackground();
        this.setupTexts();
    }

    public setupBackground(): void {
        let length = MagicValues.TILE_WIDTH * 9 + 2;
        let graphic: Graphics = PixiFactory.getColorBoxRounded(length, length, 0x000000);
        graphic.rotation = Math.PI / 4;
        this._background = new Container();
        this._background.addChild(graphic);
        this._background.scale.y = 0.5;
        this._background.visible = false;
        this._background.x = 160;
        this._background.y = 100;
        this.addChild(this._background);

        this._field = new Container();
        this._field.x = 160;
        this._field.y = 100;
        this.addChild(this._field);
    }

    private setupTexts(): void {
        this._shiphHPs = new Array<any>();
        let container = new Container();
        container.x = 230;
        container.y = 230;
        this.addChild(container);
        for (let i = 0; i < 5; i++) {
            let bg = PixiFactory.getColorBoxRounded(30, 30);
            bg.x = i * 32;
            container.addChild(bg);
            let shipHP = PixiFactory.getTextHUDSmall("");
            shipHP.x = i * 32 + 6;
            shipHP.y = 6;
            container.addChild(shipHP);
            this._shiphHPs.push(shipHP);
        }
        let title = PixiFactory.getText(this._type);
        title.x = 10;
        title.y = 10;
        this.addChild(title);
    }
}