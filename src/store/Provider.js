import { useReducer } from 'react'

import Context from './Context'

import reducer, {initState } from './reducer'
// loggger dùng để lấy ra prevState 
import logger from './logger'

function Provider({children}){
    // logger ôm reducer để truyền vào function logger xử lý in ra được prevState, nextState
    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        // những component con của Provider này đều có thể nhận được dữ liệu [state,dispatch] 
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    )

}

// - export nó ra ngoài để component con ở file js khác có thể import và sử dụng Consumer
export default Provider 
// sử dụng 
// import { ThemeProvider } from './ThemeContext'
// ở File index để bao quát các component con ở cấp cao nhất
// giúp các conponent con có thể sử dụng ThemeContext để lấy ra giá trị object chứa trong ThemeContext value={objectValue}

// còn ThemeContext vẫn sử dụng ở component con muốn lấy ra value trong cái Context này