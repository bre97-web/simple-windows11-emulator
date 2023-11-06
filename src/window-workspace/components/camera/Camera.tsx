import { Button } from "@fluentui/react-components"
import { useEffect, useRef } from "react"

function Photos({ innerRef }: {
    innerRef: React.MutableRefObject<undefined>
}) {

    return (
        <div
            ref={innerRef}
        >

        </div>
    )
}
function TakePhotoButton({ onPhotoTake }: {
    onPhotoTake: () => void
}) {
    return (
        <Button
            appearance="primary"
            onClick={() => onPhotoTake()}
        >Take a Photo</Button>
    )
}
function Video({ innerRef }: {
    innerRef: React.MutableRefObject<undefined>
}) {
    return (
        <video
            ref={innerRef}
        ></video>
    )
}

export function Camera() {
    const cameraRef = useRef()
    const photoRef = useRef()

    /**
     * Request Permission
     */
    useEffect(() => {
        if (navigator && navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    facingMode: "user", 
                    width: 300,
                    height: 300 
                }
            }).then((stream) => {
                cameraRef.current.srcObject = stream
                cameraRef.current.onloadedmetadata = () => cameraRef.current.play()
            }).catch(() => {
                console.log('Unknown error.')
            })
        } else {
            console.log("camera API is not supported by your browser")
        }
    })




    const onPhotoTakeEvent = () => {
        let canvas = document.createElement('canvas')
        canvas.getContext('2d').drawImage(cameraRef.current, 0, 0, canvas.width, canvas.height)
        canvas.style.width = '8rem'
        canvas.style.aspectRatio = '1 / 1'
        photoRef.current.appendChild(canvas)    
    }

    return (
        <div>
            <Video innerRef={cameraRef}></Video>

            <TakePhotoButton
                onPhotoTake={onPhotoTakeEvent}
            ></TakePhotoButton>

            <Photos innerRef={photoRef}></Photos>
        </div>
    )
}