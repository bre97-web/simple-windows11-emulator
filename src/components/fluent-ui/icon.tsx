
export type IconElement = string

/**
 * return a icon with material-symbols-outlined
 */
export function Icon(_: any, { slots }: any) {
    // console.log(slots['default'], props);
    
    return (
        <span class="material-symbols-outlined icon">
            {
                slots?.default ? slots.default() : '' 
            }
        </span>
    )
}

export function ScalingButton({ direction = 'horizontal' }: { direction: "horizontal" | "vertical" }, { slots }: any) {
    return (
        <div class="scaling-button">
            <div style={{
                flexDirection: direction === 'vertical' ? 'column' : 'row',
            }}>
            {
                slots?.default ? slots.default() : '' 
            }
            </div>
        </div>
    )
}

export function IconButton(_: any, { slots }: { slots: any }) {
    return (

        <div class="icon-button">
            {
                slots?.default ? slots.default() : '' 
            }
        </div>
    )
}