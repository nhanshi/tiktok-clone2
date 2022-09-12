// file này chỉ nhằm cung cấp 1 cách tổng hợp các export để sau này
// sử dụng import gọn hơn ở file sử dụng Context thôi
import Context from './Context'
import { useContext } from 'react'

export const useStore = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}























