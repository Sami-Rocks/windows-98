// Modules
import { CSSProperties, MouseEvent as ReactMouseEvent, useEffect, useState } from 'react'

type WindowPosition = CSSProperties & {
	left: number,
	top: number
}

type DragDifference = {
	x: number,
	y: number
}

// Utilities
function getInitialWindowPosition (): WindowPosition {
	return {
		left: 20 + Math.floor(Math.random() * 500),
		top: 20 + Math.floor(Math.random() * 400)
	}
}

// Hook: Window drag
function useWindowDrag (isMaximized?: boolean) {
	// State
	const [dragDifference, setDragDifference] = useState<DragDifference>({
		x: 0,
		y: 0
	})
	const [isDragging, setIsDragging] = useState(false)
	const [style, setStyle] = useState<WindowPosition>(getInitialWindowPosition)

	// Functions
	function dragStart (event: ReactMouseEvent<HTMLDivElement>) {
		if (isMaximized) return

		const box = event.currentTarget.getBoundingClientRect()

		event.preventDefault()
		setDragDifference({
			x: event.clientX - box.left,
			y: event.clientY - box.top
		})
		setIsDragging(true)
	}

	function dragEnd () {
		setIsDragging(false)
	}

	function noop () {
		return undefined
	}

	// Effects
	useEffect(() => {
		if (!isDragging) return

		function dragWindow (event: MouseEvent) {
			setStyle({
				left: event.clientX - dragDifference.x,
				top: event.clientY - dragDifference.y
			})
		}

		document.addEventListener('mousemove', dragWindow)
		document.addEventListener('mouseup', dragEnd)

		return () => {
			document.removeEventListener('mousemove', dragWindow)
			document.removeEventListener('mouseup', dragEnd)
		}
	}, [dragDifference, isDragging])

	return {
		onDragEnd: dragEnd,
		onDragMove: noop,
		onDragStart: dragStart,
		style
	}
}

export default useWindowDrag
