/// <reference types="node" />
import { Canvas } from 'canvas';
import { IAvatarBuilder, IColor, IImageBuilder, IMargin, IOptions, IRandom, IShadow } from '../common';
export declare const DEFAULT_COLORS: string[];
export declare class Random implements IRandom {
    private rng;
    constructor(rng: any);
    /**
     * Next double [0..1[
     */
    nextDouble(): number;
    /**
     * Next integer [0..max[
     * @param max
     */
    nextInt(max: number): number;
}
export declare class AvatarBuilder implements IAvatarBuilder {
    private imageBuilder;
    readonly width: number;
    readonly height: number;
    readonly options: IOptions;
    constructor(imageBuilder: IImageBuilder, width: number, height: number, options?: IOptions);
    create(id: string): Promise<Buffer>;
    private createBuffer;
}
/**
 * Compose multi builder
 */
export declare class ComposeImageBuilder implements IImageBuilder {
    private imageBuilders;
    constructor(imageBuilders: IImageBuilder[]);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Random avatar builder, choose random builder
 */
export declare class RandomImageBuilder implements IImageBuilder {
    private imageBuilders;
    constructor(imageBuilders: IImageBuilder[]);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Add margin in child
 */
export declare class MarginImageBuilder implements IImageBuilder {
    private imageBuilder;
    private margin;
    constructor(imageBuilder: IImageBuilder, margin?: number | IMargin);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Fill background with color
 */
export declare class FillStyleImageBuilder implements IImageBuilder {
    private fillStyle;
    constructor(fillStyle: any);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Fill background with random color
 */
export declare class RandomFillStyleImageBuilder implements IImageBuilder {
    private fillStyles;
    constructor(fillStyles?: any[]);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Circle mask in child
 */
export declare class CircleMaskImageBuilder implements IImageBuilder {
    private imageBuilder;
    constructor(imageBuilder: IImageBuilder);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Rounded rect mask in child
 */
export declare class RoundedRectMaskImageBuilder implements IImageBuilder {
    private imageBuilder;
    private corner;
    constructor(imageBuilder: IImageBuilder, radius?: number);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Add a shadow
 */
export declare class ShadowImageBuilder implements IImageBuilder {
    private imageBuilder;
    private shadow;
    constructor(imageBuilder: IImageBuilder, shadow?: IShadow);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
/**
 * Add a score shadow
 */
export declare class ScoreShadowImageBuilder implements IImageBuilder {
    private imageBuilder;
    private shadowColor;
    constructor(imageBuilder: IImageBuilder, shadowColor?: IColor);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
    private createScore;
}
/**
 * Add long shadow behind
 */
export declare class LongShadowImageBuilder implements IImageBuilder {
    private imageBuilder;
    private shadowColor;
    constructor(imageBuilder: IImageBuilder, shadowColor?: IColor);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
    private createLong;
    private static isInShade;
}
/**
 * Avatar with images folder
 */
export declare class GroupImageBuilder implements IImageBuilder {
    private groups;
    private partMap;
    constructor(pathLocation: string, groups: string[][]);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
    private static buildPartMap;
}
/**
 * Grid builder
 */
export declare class GridImageBuilder implements IImageBuilder {
    private imageBuilders;
    private gridx;
    private gridy;
    constructor(imageBuilders: IImageBuilder, gridx: number, gridy: number);
    buildImage(avatarBuilder: IAvatarBuilder, random: IRandom, width: number, height: number): Promise<Canvas>;
}
