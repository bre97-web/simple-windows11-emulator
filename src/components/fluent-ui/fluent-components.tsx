/**
 * Fluent Web Components
 */
import { useThemeStore } from "@/store/ThemeStore"
import { Slider, StandardLuminance, SwatchRGB, accentBaseColor, baseLayerLuminance } from "@fluentui/web-components"
import { Select } from '@microsoft/fast-foundation'
import "@melloware/coloris/dist/coloris.css";
import * as Coloris from "@melloware/coloris";

// DesignToken.

/**
 * The initializtion of the fleunt web components
 *   1. dark mode
 *   2. base color 
 */
export const initFluentDesignBaseColor = () => {
    const theme = useThemeStore()

    /**
     * Activate Dark mode if the option darkEnabled of theme store is true
     */
    getBaseLayerLuminanceInstance().setValueFor(document.body,  theme.getTheme.baseLayerValue)
    if(theme.getTheme.darkModeEnabled) {
        document.documentElement.classList.add('dark')
    }

    /**
     * Get the rgb from store
     */
    let color = SwatchRGB.from({
        ...theme.getTheme.swatchColor,
    })
    accentBaseColor.setValueFor(document.body, color)
}


export const getBaseLayerLuminanceInstance = () => baseLayerLuminance

// Dark Mode
export function DarkModeSelect() {
    const theme = useThemeStore()
    return (
        <fluent-select
            appearance="accent"
            value={theme.getTheme.darkModeEnabled ? "DarkMode" : "LightMode"}
            onChange={(e: CustomEvent) => {
                theme.setIsDarkMode((e.target as Select).value === 'DarkMode')
                document.documentElement.classList[theme.getTheme.darkModeEnabled ? 'add' : 'remove']('dark')
                getBaseLayerLuminanceInstance().setValueFor(document.body,  (e.target as Select).value === 'DarkMode' ? StandardLuminance.DarkMode : StandardLuminance.LightMode)
            }}
        >
            <fluent-option value="LightMode">Light</fluent-option>
            <fluent-option value="DarkMode">Dark</fluent-option>
        </fluent-select>
    )
}

export function BaseLayerSlider() {
    const theme = useThemeStore()

    const Slider = ({ max, min }: {
        max: number
        min: number
    }) => (
        <fluent-slider
            max={max}
            min={min}
            initialValue={theme.getTheme.baseLayerValue * 100}
            onChange={(e: CustomEvent) => {
                let baseLayerValue = parseInt((e.target as Slider).value) / 100
                getBaseLayerLuminanceInstance().setValueFor(document.body, baseLayerValue)
                theme.setBaseLayerValue(baseLayerValue)
            }}
        >
        </fluent-slider>
    )

    return (
        <>
            {
                theme.getTheme.darkModeEnabled ?
                <Slider min={0} max={40}></Slider> :
                <Slider min={50} max={100}></Slider>
            }
        </>
    )
}

export function AccentBaseColorPicker() {
    const theme = useThemeStore()

    Coloris.init();
    Coloris.coloris({
        el: "#coloris",
        format: "rgb"
    });
    Coloris.close();

    return (
        <fluent-button
            id="coloris"
            appearance="accent"
            onInput={(e: Event) => {
                const [r, g, b] = (e.target as HTMLInputElement).value.replace('rgb(', '').replace(')', '').split(',')
                
                theme.setSwatchColor(parseInt(r), parseInt(g), parseInt(b))

                let color = SwatchRGB.from({
                    r: parseInt(r),
                    g: parseInt(g),
                    b: parseInt(b)
                })
                accentBaseColor.setValueFor(document.body, color)
            }}
        >Choose a different color</fluent-button>
    )
}