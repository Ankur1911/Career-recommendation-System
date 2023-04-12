import "./Pc.css"
import Profile_blank from '../Image/profile_blank.png'
import {AiOutlineHome} from 'react-icons/ai'
import {TbMessageCircle2} from 'react-icons/tb'
import {VscAccount} from 'react-icons/vsc'
export default function Main() {
    const previewFile = () =>  {
        var preview = document.querySelector('#BImage');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
    
        reader.onloadend = function () {
            preview.src = reader.result;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    return (
        <div className='main'>
            <div className="nav">
            <div className="nav--upper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </div>

                <div className="nav--lower">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>

                </div>
            </div>
            <div className='content' style={{display:'flex'}}>
                
                <div style={{width:'90%'}}>
                     <h2>Profile </h2>  <hr style={{margin:'5px', width:'82%'}}/>  
                    <table>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" className="p" placeholder="Username"/></td>
                        </tr>
                        <tr>
                            <td>Profile Photo</td>
                            <td style={{display:'flex'}}> 
                                <img id='BImage' src={Profile_blank}  alt="Preview Image..." style={{borderRadius: '5px', width:'140px', height: '140px'}} /> 
                                <input type="file" className="uploadF p" style={{width:'181px', height:'33px', marginLeft:'15px', color:'white', padding:'10px 15px', border:'none', backgroundColor:'#EB5E28'}} accept="image/*" onChange={previewFile}/>
                            </td>
                        </tr>
                    </table> <br />
                    <h2>Reset Password</h2> <hr style={{margin:'5px', width:'83%'}}/>
                    <table>
                        <tr>
                            <td>Old Password</td>
                            <td><input type="password" placeholder='Password' className="p" /></td>
                        </tr>
                        <tr>
                            <td>New Password</td>
                            <td><input type="password" placeholder='Password'  className="p"/></td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td><input type="password" placeholder='Password' className="p"/> 
                            <button style={{padding:'9px', marginLeft:'30px', width:'300px', borderRadius:'10px'}}>Save Changes</button> </td>
                        </tr>
                    </table>
                </div>

                <div style={{width:'10%'}}>
                    <a href="/">
                    <button style={{width:'210px', height:'48px',borderRadius:'10px', position:'absolute', right:'86px', top:'50px', color:'white', padding:'10px 15px', border:'none', backgroundColor:'#EB5E28'}}>View Profile</button>
                    </a>
                </div>

            </div>
        </div>
    )
}