import { createPortal } from 'react-dom';

export function Modal({ children }) {
    return createPortal(
        <div className='moda-background'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

