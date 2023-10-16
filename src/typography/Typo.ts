import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

class MDTypoStyles extends LitElement {
    static override styles = [
        css`
            * {
                padding: 0;
                margin: 0;
            }
            :root {
                /* display - large */
                --md-sys-typescale-display-large-font-family-name: Roboto;
                --md-sys-typescale-display-large-font-family-style: Regular;
                --md-sys-typescale-display-large-font-weight: 400px;
                --md-sys-typescale-display-large-font-size: 57px;
                --md-sys-typescale-display-large-line-height: 64px;
                --md-sys-typescale-display-large-letter-spacing: -0.25px;
                /* display - medium */
                --md-sys-typescale-display-medium-font-family-name: Roboto;
                --md-sys-typescale-display-medium-font-family-style: Regular;
                --md-sys-typescale-display-medium-font-weight: 400px;
                --md-sys-typescale-display-medium-font-size: 45px;
                --md-sys-typescale-display-medium-line-height: 52px;
                --md-sys-typescale-display-medium-letter-spacing: 0px;
                /* display - small */
                --md-sys-typescale-display-small-font-family-name: Roboto;
                --md-sys-typescale-display-small-font-family-style: Regular;
                --md-sys-typescale-display-small-font-weight: 400px;
                --md-sys-typescale-display-small-font-size: 36px;
                --md-sys-typescale-display-small-line-height: 44px;
                --md-sys-typescale-display-small-letter-spacing: 0px;
                /* headline - large */
                --md-sys-typescale-headline-large-font-family-name: Roboto;
                --md-sys-typescale-headline-large-font-family-style: Regular;
                --md-sys-typescale-headline-large-font-weight: 400px;
                --md-sys-typescale-headline-large-font-size: 32px;
                --md-sys-typescale-headline-large-line-height: 40px;
                --md-sys-typescale-headline-large-letter-spacing: 0px;
                /* headline - medium */
                --md-sys-typescale-headline-medium-font-family-name: Roboto;
                --md-sys-typescale-headline-medium-font-family-style: Regular;
                --md-sys-typescale-headline-medium-font-weight: 400px;
                --md-sys-typescale-headline-medium-font-size: 28px;
                --md-sys-typescale-headline-medium-line-height: 36px;
                --md-sys-typescale-headline-medium-letter-spacing: 0px;
                /* headline - small */
                --md-sys-typescale-headline-small-font-family-name: Roboto;
                --md-sys-typescale-headline-small-font-family-style: Regular;
                --md-sys-typescale-headline-small-font-weight: 400px;
                --md-sys-typescale-headline-small-font-size: 24px;
                --md-sys-typescale-headline-small-line-height: 32px;
                --md-sys-typescale-headline-small-letter-spacing: 0px;
                /* body - large */
                --md-sys-typescale-body-large-font-family-name: Roboto;
                --md-sys-typescale-body-large-font-family-style: Regular;
                --md-sys-typescale-body-large-font-weight: 400px;
                --md-sys-typescale-body-large-font-size: 16px;
                --md-sys-typescale-body-large-line-height: 24px;
                --md-sys-typescale-body-large-letter-spacing: 0.50px;
                /* body - medium */
                --md-sys-typescale-body-medium-font-family-name: Roboto;
                --md-sys-typescale-body-medium-font-family-style: Regular;
                --md-sys-typescale-body-medium-font-weight: 400px;
                --md-sys-typescale-body-medium-font-size: 14px;
                --md-sys-typescale-body-medium-line-height: 20px;
                --md-sys-typescale-body-medium-letter-spacing: 0.25px;
                /* body - small */
                --md-sys-typescale-body-small-font-family-name: Roboto;
                --md-sys-typescale-body-small-font-family-style: Regular;
                --md-sys-typescale-body-small-font-weight: 400px;
                --md-sys-typescale-body-small-font-size: 12px;
                --md-sys-typescale-body-small-line-height: 16px;
                --md-sys-typescale-body-small-letter-spacing: 0.40px;
                /* label - large */
                --md-sys-typescale-label-large-font-family-name: Roboto;
                --md-sys-typescale-label-large-font-family-style: Medium;
                --md-sys-typescale-label-large-font-weight: 500px;
                --md-sys-typescale-label-large-font-size: 14px;
                --md-sys-typescale-label-large-line-height: 20px;
                --md-sys-typescale-label-large-letter-spacing: 0.10px;
                /* label - medium */
                --md-sys-typescale-label-medium-font-family-name: Roboto;
                --md-sys-typescale-label-medium-font-family-style: Medium;
                --md-sys-typescale-label-medium-font-weight: 500px;
                --md-sys-typescale-label-medium-font-size: 12px;
                --md-sys-typescale-label-medium-line-height: 16px;
                --md-sys-typescale-label-medium-letter-spacing: 0.50px;
                /* label - small */
                --md-sys-typescale-label-small-font-family-name: Roboto;
                --md-sys-typescale-label-small-font-family-style: Medium;
                --md-sys-typescale-label-small-font-weight: 500px;
                --md-sys-typescale-label-small-font-size: 11px;
                --md-sys-typescale-label-small-line-height: 16px;
                --md-sys-typescale-label-small-letter-spacing: 0.50px;
                /* title - large */
                --md-sys-typescale-title-large-font-family-name: Roboto;
                --md-sys-typescale-title-large-font-family-style: Regular;
                --md-sys-typescale-title-large-font-weight: 400px;
                --md-sys-typescale-title-large-font-size: 22px;
                --md-sys-typescale-title-large-line-height: 28px;
                --md-sys-typescale-title-large-letter-spacing: 0px;
                /* title - medium */
                --md-sys-typescale-title-medium-font-family-name: Roboto;
                --md-sys-typescale-title-medium-font-family-style: Medium;
                --md-sys-typescale-title-medium-font-weight: 500px;
                --md-sys-typescale-title-medium-font-size: 16px;
                --md-sys-typescale-title-medium-line-height: 24px;
                --md-sys-typescale-title-medium-letter-spacing: 0.15px;
                /* title - small */
                --md-sys-typescale-title-small-font-family-name: Roboto;
                --md-sys-typescale-title-small-font-family-style: Medium;
                --md-sys-typescale-title-small-font-weight: 500px;
                --md-sys-typescale-title-small-font-size: 14px;
                --md-sys-typescale-title-small-line-height: 20px;
                --md-sys-typescale-title-small-letter-spacing: 0.10px;
            }
        `,
        css`
            .display-large{
                font-family: var(--md-sys-typescale-display-large-font-family-name);
                font-style: var(--md-sys-typescale-display-large-font-family-style);
                font-weight: var(--md-sys-typescale-display-large-font-weight);
                font-size: var(--md-sys-typescale-display-large-font-size);
                letter-spacing: var(--md-sys-typescale-display-large-tracking);
                line-height: var(--md-sys-typescale-display-large-height);
                text-transform: var(--md-sys-typescale-display-large-text-transform);
                text-decoration: var(--md-sys-typescale-display-large-text-decoration);
                }
            .display-medium{
                font-family: var(--md-sys-typescale-display-medium-font-family-name);
                font-style: var(--md-sys-typescale-display-medium-font-family-style);
                font-weight: var(--md-sys-typescale-display-medium-font-weight);
                font-size: var(--md-sys-typescale-display-medium-font-size);
                letter-spacing: var(--md-sys-typescale-display-medium-tracking);
                line-height: var(--md-sys-typescale-display-medium-height);
                text-transform: var(--md-sys-typescale-display-medium-text-transform);
                text-decoration: var(--md-sys-typescale-display-medium-text-decoration);
            }
            .display-small{
                font-family: var(--md-sys-typescale-display-small-font-family-name);
                font-style: var(--md-sys-typescale-display-small-font-family-style);
                font-weight: var(--md-sys-typescale-display-small-font-weight);
                font-size: var(--md-sys-typescale-display-small-font-size);
                letter-spacing: var(--md-sys-typescale-display-small-tracking);
                line-height: var(--md-sys-typescale-display-small-height);
                text-transform: var(--md-sys-typescale-display-small-text-transform);
                text-decoration: var(--md-sys-typescale-display-small-text-decoration);
            }
            .headline-large{
                font-family: var(--md-sys-typescale-headline-large-font-family-name);
                font-style: var(--md-sys-typescale-headline-large-font-family-style);
                font-weight: var(--md-sys-typescale-headline-large-font-weight);
                font-size: var(--md-sys-typescale-headline-large-font-size);
                letter-spacing: var(--md-sys-typescale-headline-large-tracking);
                line-height: var(--md-sys-typescale-headline-large-height);
                text-transform: var(--md-sys-typescale-headline-large-text-transform);
                text-decoration: var(--md-sys-typescale-headline-large-text-decoration);
            }
            .headline-medium{
                font-family: var(--md-sys-typescale-headline-medium-font-family-name);
                font-style: var(--md-sys-typescale-headline-medium-font-family-style);
                font-weight: var(--md-sys-typescale-headline-medium-font-weight);
                font-size: var(--md-sys-typescale-headline-medium-font-size);
                letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
                line-height: var(--md-sys-typescale-headline-medium-height);
                text-transform: var(--md-sys-typescale-headline-medium-text-transform);
                text-decoration: var(--md-sys-typescale-headline-medium-text-decoration);
            }
            .headline-small{
                font-family: var(--md-sys-typescale-headline-small-font-family-name);
                font-style: var(--md-sys-typescale-headline-small-font-family-style);
                font-weight: var(--md-sys-typescale-headline-small-font-weight);
                font-size: var(--md-sys-typescale-headline-small-font-size);
                letter-spacing: var(--md-sys-typescale-headline-small-tracking);
                line-height: var(--md-sys-typescale-headline-small-height);
                text-transform: var(--md-sys-typescale-headline-small-text-transform);
                text-decoration: var(--md-sys-typescale-headline-small-text-decoration);
            }
            .body-large{
                font-family: var(--md-sys-typescale-body-large-font-family-name);
                font-style: var(--md-sys-typescale-body-large-font-family-style);
                font-weight: var(--md-sys-typescale-body-large-font-weight);
                font-size: var(--md-sys-typescale-body-large-font-size);
                letter-spacing: var(--md-sys-typescale-body-large-tracking);
                line-height: var(--md-sys-typescale-body-large-height);
                text-transform: var(--md-sys-typescale-body-large-text-transform);
                text-decoration: var(--md-sys-typescale-body-large-text-decoration);
            }
            .body-medium{
                font-family: var(--md-sys-typescale-body-medium-font-family-name);
                font-style: var(--md-sys-typescale-body-medium-font-family-style);
                font-weight: var(--md-sys-typescale-body-medium-font-weight);
                font-size: var(--md-sys-typescale-body-medium-font-size);
                letter-spacing: var(--md-sys-typescale-body-medium-tracking);
                line-height: var(--md-sys-typescale-body-medium-height);
                text-transform: var(--md-sys-typescale-body-medium-text-transform);
                text-decoration: var(--md-sys-typescale-body-medium-text-decoration);
            }
            .body-small{
                font-family: var(--md-sys-typescale-body-small-font-family-name);
                font-style: var(--md-sys-typescale-body-small-font-family-style);
                font-weight: var(--md-sys-typescale-body-small-font-weight);
                font-size: var(--md-sys-typescale-body-small-font-size);
                letter-spacing: var(--md-sys-typescale-body-small-tracking);
                line-height: var(--md-sys-typescale-body-small-height);
                text-transform: var(--md-sys-typescale-body-small-text-transform);
                text-decoration: var(--md-sys-typescale-body-small-text-decoration);
            }
            .label-large{
                font-family: var(--md-sys-typescale-label-large-font-family-name);
                font-style: var(--md-sys-typescale-label-large-font-family-style);
                font-weight: var(--md-sys-typescale-label-large-font-weight);
                font-size: var(--md-sys-typescale-label-large-font-size);
                letter-spacing: var(--md-sys-typescale-label-large-tracking);
                line-height: var(--md-sys-typescale-label-large-height);
                text-transform: var(--md-sys-typescale-label-large-text-transform);
                text-decoration: var(--md-sys-typescale-label-large-text-decoration);
            }
            .label-medium{
                font-family: var(--md-sys-typescale-label-medium-font-family-name);
                font-style: var(--md-sys-typescale-label-medium-font-family-style);
                font-weight: var(--md-sys-typescale-label-medium-font-weight);
                font-size: var(--md-sys-typescale-label-medium-font-size);
                letter-spacing: var(--md-sys-typescale-label-medium-tracking);
                line-height: var(--md-sys-typescale-label-medium-height);
                text-transform: var(--md-sys-typescale-label-medium-text-transform);
                text-decoration: var(--md-sys-typescale-label-medium-text-decoration);
            }
            .label-small{
                font-family: var(--md-sys-typescale-label-small-font-family-name);
                font-style: var(--md-sys-typescale-label-small-font-family-style);
                font-weight: var(--md-sys-typescale-label-small-font-weight);
                font-size: var(--md-sys-typescale-label-small-font-size);
                letter-spacing: var(--md-sys-typescale-label-small-tracking);
                line-height: var(--md-sys-typescale-label-small-height);
                text-transform: var(--md-sys-typescale-label-small-text-transform);
                text-decoration: var(--md-sys-typescale-label-small-text-decoration);
            }
            .title-large{
                font-family: var(--md-sys-typescale-title-large-font-family-name);
                font-style: var(--md-sys-typescale-title-large-font-family-style);
                font-weight: var(--md-sys-typescale-title-large-font-weight);
                font-size: var(--md-sys-typescale-title-large-font-size);
                letter-spacing: var(--md-sys-typescale-title-large-tracking);
                line-height: var(--md-sys-typescale-title-large-height);
                text-transform: var(--md-sys-typescale-title-large-text-transform);
                text-decoration: var(--md-sys-typescale-title-large-text-decoration);
            }
            .title-medium{
                font-family: var(--md-sys-typescale-title-medium-font-family-name);
                font-style: var(--md-sys-typescale-title-medium-font-family-style);
                font-weight: var(--md-sys-typescale-title-medium-font-weight);
                font-size: var(--md-sys-typescale-title-medium-font-size);
                letter-spacing: var(--md-sys-typescale-title-medium-tracking);
                line-height: var(--md-sys-typescale-title-medium-height);
                text-transform: var(--md-sys-typescale-title-medium-text-transform);
                text-decoration: var(--md-sys-typescale-title-medium-text-decoration);
            }
            .title-small{
                font-family: var(--md-sys-typescale-title-small-font-family-name);
                font-style: var(--md-sys-typescale-title-small-font-family-style);
                font-weight: var(--md-sys-typescale-title-small-font-weight);
                font-size: var(--md-sys-typescale-title-small-font-size);
                letter-spacing: var(--md-sys-typescale-title-small-tracking);
                line-height: var(--md-sys-typescale-title-small-height);
                text-transform: var(--md-sys-typescale-title-small-text-transform);
                text-decoration: var(--md-sys-typescale-title-small-text-decoration);
            }
        `
    ]
}

class TypoRenderer extends MDTypoStyles {
    public type: string

    protected override render(): unknown {
        return html`
            <p class=${this.type}>
                <slot></slot>
            </p>
        `
    }
}

@customElement('md-text')
export class MDText extends TypoRenderer {
    @property({ type: String, attribute: 'type'})
    public override type: string = "body-medium";

}
