// để truyền ref từ component cha sang con thì ta ko dùng props mà dùng higher order component này
import { forwardRef } from 'react'
// dùng để đóng gói component lại nhằm tăng tính private cho đối tượng function component áp dụng
// 
import { useImperativeHandle} from 'react'

import { useRef} from 'react'

import video1 from './videos/download.mp4'


function Video(props, ref) {

    const videoRef = useRef()

    // useImperativeHandle nhận 2 đối số là ref và callback
    useImperativeHandle(ref, () => ({
        // object trong này sẽ được lấy để làm cái ref ở 
        // *1 videoRef từ file App.js  và videoRef này sẽ nhận được object ở trong này

        // ở đây ta quy định chỉ cung cấp 2 method play và pause cho các đối tượng bên ngoài component
        // này sử dụng mà thôi, điều này nhằm tăng tính private cho component này
        play(){
            videoRef.current.play()

        },
        pause(){
            videoRef.current.pause()

        },
    }))

    return (
        <div>
            <video
                ref={videoRef}
                src={video1}
                width={280}
            />

        </div>
        
    )

}
// sử dụng forwardRef
export default forwardRef(Video)
















