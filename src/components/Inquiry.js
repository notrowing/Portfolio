import React, { useState }  from 'react';
import '../static/css/Inquiry.css';
import emailjs from 'emailjs-com';

const Inquiry = () => {
   const [InputData, setInputData] = useState({
        
        inputName: '',
        emailId:'',
        emailDomain: '',
        inputNumber1: '',
        inputNumber2: '',
        inputNumber3: '',
        inputAsk: '',
        inputCheck: false,
    });

        //  입력값 변경 
    const handleChange = (e) => {
        // 이벤트 객체에서 필요한 값들을 추출
        const { id, value, type, checked } = e.target;
  
        // setFormData를 사용하여 상태 업데이트
        setInputData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
        }));

    console.log(e.target);
    };
  
    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();

        //이름에 특수문자 포함 못하게 
        const regex1 = /^[a-zA-Z가-힣]*$/;
        const isNameValid = regex1.test(InputData.inputName);

        //이메일 아이디 : 알파벳과 숫자만 가능
        const regex2 = /^[a-zA-Z0-9]+$/;
        const isEmailValid = regex2.test(InputData.emailId);
        
        //이메일 도메인: 알파벳과 특수문자 . 만 가능 
        const regex3 = /^[a-zA-Z.]*$/;
        const isDomainValid = regex3.test(InputData.emailDomain);

        // 성함이 유효하지 않으면 경고 메시지 출력
        if (!isNameValid) {
            alert('이름에는 특수문자를 사용할 수 없습니다.');
            return;
        }

        //이메일 아이디에 특수문자 포함했을때
        if(!isEmailValid){
            alert('이메일에는 특수문자를 사용할 수 없습니다.')
            return;
        }
        //이메일 도메인 특수문자 포함했을때 (.은 입력가능)
        if(!isDomainValid){
            alert('이메일 도메인 형식을 확인해주세요.')
            return;
        }
    
    
        // 저장된 상태 출력 (실제로 서버에 전송하거나 다른 로직으로 대체)
        console.log('Form Data:',InputData);

        // EmailJS로 이메일 전송
        emailjs
        .send(
            'service_xdktqu9', // EmailJS에서 생성한 서비스 ID
            'template_qhp6nyr', // EmailJS에서 생성한 템플릿 ID
            InputData,
            'qmT2G7bE_9SeWMpQ-' // EmailJS에서 생성한 사용자 PublicKey
        )
        .then(
        (result) => {
            console.log('Email sent successfully:', result.text);
        },
        (error) => {
            console.error('Failed to send email:', error.text);
        }
        );
    };

    // 이메일 직접입력
    const handlecustomEmailDomain = (e)=>{
        const { value } = e.target;
        console.log(value);
        setInputData((prevData) => ({
          ...prevData,
     
          emailDomain: value === 'userinput' ? '': value,
        }));
    };

  return (
    <article className="InquiryInputPages">

        <div className='inquiryBox'>
      
        <div className="inquiryTitle">
            <h1></h1>
        </div>
                
        <section id = "inquirySection">
            <form id = "inquiryForm"  onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            성함
                            <span className="red_span">*</span>
                        </td>
                        <td>
                            <input  type='text' 
                                    id= "inputName"
                                    maxLength="20" 
                                    required 
                                    onChange={handleChange}
                                    align = "middle"
                                    title="특수문자, 숫자는 입력이 불가능합니다."
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            이메일
                            <span  className="red_span">*</span>
                        </td>
                        <td colSpan="3">
                            <input  type="text" 
                                    id= "emailId"
                                    maxLength="20"
                                    placeholder="이메일 아이디" 
                                    required 
                                    title="특수문자는 입력이 불가능합니다."
                                    onChange={handleChange}
                            />
                            <span>&nbsp;@&nbsp;&nbsp;</span>
                        
                            <input  type="text" 
                                    id= "emailDomain"
                                    maxLength="20"
                                    placeholder="이메일도메인" 
                                    required 
                                    onChange={(e)=>{
                                        handleChange(e);
                                        handlecustomEmailDomain(e);
                                    }}
                                    value={InputData.emailDomain}
                                    readOnly={
                                        InputData.emailDomain==='naver.com'||InputData.emailDomain==='gmail.com'||InputData.emailDomain==='hanmail.net'
                                        ||InputData.emailDomain==='korea.com'||InputData.emailDomain==='nate.com'||InputData.emailDomain==='yahoo.com'
                                    }
                            />
                
                            <span>&nbsp;&nbsp;</span>

                            <select id="selectDomain" 
                                    title="이메일 도메인 주소 선택"
                                    value={InputData.emailDomain}
                                    onChange={(e)=>{
                                        handleChange(e);
                                        handlecustomEmailDomain(e);
                                    }}
                            >
                                <option value=""disabled selected hidden>-선택-</option>
                                <option value="userinput">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="korea.com">korea.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            연락처
                            <span className="red_span">*</span>
                        </td>
                        <td colSpan="3">
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber1" maxLength="3" placeholder='010' required onChange={handleChange}/>
                            <span>&nbsp;-&nbsp;&nbsp;</span>
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber2" maxLength="4" placeholder='1234' required onChange={handleChange}/>
                            <span>&nbsp;-&nbsp;&nbsp;</span>
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber3" maxLength="4" placeholder='5678' required onChange={handleChange}/>
                        </td>
                    </tr>


                    <tr>
                        <td>문의 상세 내용</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <textarea type='text' id = "inputAsk"  onChange={handleChange} placeholder='문의하실 내용을 입력해주세요.'/>
                        </td>
                    </tr>

                </table>

              
                
                <button id="inquiry_Btn" type='submit'>send</button>
            </form>

        </section>
        </div>
            
     
    </article>
  );
};

export default Inquiry;