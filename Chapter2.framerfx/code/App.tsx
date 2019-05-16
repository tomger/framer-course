import { Override, Data, useTransform, MotionValue } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({
    background: "#E5F1FF",
    draggableY: new MotionValue(0),
})

export function buttonStyle(): Override {
    return {
        // background: "white",
        // border: "1px solid #ddd",
        whileTap: { y: 0, scale: 1.2, rotate: 180 },
        animate: {
            background: data.background,
        },
        // transition: { background: { duration: 0.25 } },
        onTap: () => {
            data.background = "green"
        },
    }
}

export function Draggable(): Override {
    return {
        drag: "y",
        y: data.draggableY,
        onDrag: (_, info) => console.log(info.point.y),
        dragConstraints: {
            top: -203,
            bottom: 360,
        },
    }
}

export function Listener(): Override {
    const y = useTransform(data.draggableY, [-1000, 0, 500], [1000, 0, 150])
    const radius = useTransform(data.draggableY, [0, 500], [0, 8])
    return {
        radius,
        y,
    }
}
