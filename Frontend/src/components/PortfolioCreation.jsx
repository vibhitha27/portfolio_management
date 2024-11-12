
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '../context/Context';
// import { QRCodeCanvas } from 'qrcode.react';

// const Portfolio = () => {
//     const { Email } = useUser();
//     const [portfolioData, setPortfolioData] = useState({
//         name: '',
//         dob: '',
//         interests: [],
//         hobbies: [],
//         careerSummary: '',
//         skills: [],
//         workSamples: [],
//         awards: [],
//         honors: [],
//         services: [],
//     });
//     const [message, setMessage] = useState('');
//     const [qrValue, setQrValue] = useState('');
//     const [showQRCode, setShowQRCode] = useState(false);

//     // useEffect(() => {
//     //     if (Email) {
//     //         axios
//     //             .post('http://localhost:5000/getportfolio', { email: Email })
//     //             .then((response) => {
//     //                 setPortfolioData(response.data);
//     //             })
//     //             .catch(() => {
//     //                 setMessage('Error fetching portfolio data');
//     //             });
//     //     }
//     // }, [Email]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         if (['interests', 'hobbies', 'skills', 'workSamples', 'awards', 'honors', 'services'].includes(name)) {
//             setPortfolioData({ ...portfolioData, [name]: value.split(',').map(item => item.trim()) });
//         } else {
//             setPortfolioData({ ...portfolioData, [name]: value });
//         }

//         handleGenerateQRCode();
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!Email) {
//             setMessage('You need to be logged in to update your portfolio');
//             return;
//         }

//         try {
//             await axios.post('http://localhost:5000/portfolio', {
//                 email: Email,
//                 portfolioData,
//             }, {
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             setMessage('Portfolio updated successfully!');
//         } catch {
//             setMessage('Error updating portfolio');
//         }
//     };

//     const handleGenerateQRCode = () => {
//         const portfolioSummary = `Name: ${portfolioData.name}\nDate of Birth: ${portfolioData.dob}\nInterests: ${portfolioData.interests.join(', ')}\nHobbies: ${portfolioData.hobbies.join(', ')}\nCareer Summary: ${portfolioData.careerSummary}\nSkills: ${portfolioData.skills.join(', ')}\nWork Samples: ${portfolioData.workSamples.join(', ')}\nAwards: ${portfolioData.awards.join(', ')}\nHonors: ${portfolioData.honors.join(', ')}\nServices Done: ${portfolioData.services.join(', ')}`;
//         setQrValue(portfolioSummary);
//         setShowQRCode(true);
//     };

//     return (
//         <div style={{
//             backgroundImage: "url('your-image-url.jpg')",
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             minHeight: '100vh',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontFamily: 'Arial, sans-serif',
//             color: '#fff',
//             padding: '20px',
//             boxSizing: 'border-box',
//         }}>
//             <div style={{
//                 maxWidth: '800px',
//                 width: '100%',
//                 padding: '2rem',
//                 backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             }}>
//                 <h2 style={{
//                     textAlign: 'center',
//                     color: '#ffc107',
//                     marginBottom: '1rem',
//                     fontSize: '2rem',
//                 }}>Update Portfolio</h2>
//                 <form onSubmit={handleSubmit}>
//                     {['name', 'dob', 'interests', 'hobbies', 'careerSummary', 'skills', 'workSamples', 'awards', 'honors', 'services'].map((field, index) => (
//                         <div key={index} style={{ marginBottom: '1.2rem' }}>
//                             <label style={{
//                                 display: 'block',
//                                 fontWeight: 'bold',
//                                 marginBottom: '0.5rem',
//                                 color: '#ffc107',
//                             }}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
//                             <input
//                                 type={field === 'dob' ? 'date' : 'text'}
//                                 name={field}
//                                 value={Array.isArray(portfolioData[field]) ? portfolioData[field].join(', ') : portfolioData[field]}
//                                 onChange={handleChange}
//                                 style={{
//                                     width: '100%',
//                                     padding: '0.6rem',
//                                     border: '1px solid #ccc',
//                                     borderRadius: '4px',
//                                     fontSize: '1rem',
//                                     backgroundColor: '#555',
//                                     color: '#fff',
//                                 }}
//                             />
//                         </div>
//                     ))}

//                     <button type="submit" style={{
//                         display: 'block',
//                         width: '100%',
//                         padding: '0.8rem',
//                         backgroundColor: '#ffc107',
//                         color: '#333',
//                         fontWeight: 'bold',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                         transition: 'background-color 0.3s ease',
//                     }}>Update Portfolio</button>
//                 </form>

//                 {message && <div style={{
//                     textAlign: 'center',
//                     marginTop: '1rem',
//                     fontSize: '1rem',
//                     color: 'lightgreen',
//                 }}>{message}</div>}

//                 <div style={{
//                     marginTop: '2rem',
//                     padding: '1.5rem',
//                     backgroundColor: '#444',
//                     borderRadius: '8px',
//                     color: '#fff',
//                 }}>
//                     <h2 style={{
//                         textAlign: 'center',
//                         color: '#ffc107',
//                         marginBottom: '1rem',
//                     }}>Portfolio Preview</h2>
//                     <div style={{ fontSize: '0.95rem', color: '#ddd' }}>
//                         {Object.keys(portfolioData).map((field, index) => (
//                             <p key={index}>
//                                 <strong>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {Array.isArray(portfolioData[field]) ? portfolioData[field].join(', ') : portfolioData[field]}
//                             </p>
//                         ))}
//                     </div>

//                     <button type="button" onClick={handleGenerateQRCode} style={{
//                         display: 'block',
//                         width: '100%',
//                         padding: '0.8rem',
//                         backgroundColor: '#28a745',
//                         color: '#fff',
//                         fontWeight: 'bold',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                         marginTop: '1.2rem',
//                         transition: 'background-color 0.3s ease',
//                     }}>
//                         Generate QR Code
//                     </button>

//                     {showQRCode && (
//                         <div style={{
//                             textAlign: 'center',
//                             marginTop: '1.5rem',
//                         }}>
//                             <h2 style={{ color: '#ffc107' }}>Your QR Code:</h2>
//                             <QRCodeCanvas value={qrValue} size={128} />
//                             <p style={{ color: '#ccc' }}>Scan this QR code to view your portfolio summary!</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Portfolio;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/Context';
import { QRCodeCanvas } from 'qrcode.react';

const PortfolioCreation = () => {
    const { Email } = useUser();
    const [portfolioData, setPortfolioData] = useState({
        name: '',
        dob: '',
        interests: [],
        hobbies: [],
        careerSummary: '',
        skills: [],
        workSamples: [],
        awards: [],
        honors: [],
        services: [],
    });
    const [message, setMessage] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    useEffect(() => {
        if (Email) {
            axios
                .post('http://localhost:5000/getportfolio', { email: Email })
                .then((response) => {
                    setPortfolioData(response.data);
                })
                .catch(() => {
                    setMessage('Error fetching portfolio data');
                });
        }
    }, [Email]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (['interests', 'hobbies', 'skills', 'workSamples', 'awards', 'honors', 'services'].includes(name)) {
            setPortfolioData({ ...portfolioData, [name]: value.split(',').map(item => item.trim()) });
        } else {
            setPortfolioData({ ...portfolioData, [name]: value });
        }

        handleGenerateQRCode();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Email) {
            setMessage('You need to be logged in to update your portfolio');
            return;
        }

        try {
            await axios.post('http://localhost:5000/portfolio', {
                email: Email,
                portfolioData,
            }, {
                headers: { 'Content-Type': 'application/json' },
            });
            setMessage('Portfolio updated successfully!');
        } catch {
            setMessage('Error updating portfolio');
        }
    };

    const handleGenerateQRCode = () => {
        const portfolioSummary = `Name: ${portfolioData.name}\nDate of Birth: ${portfolioData.dob}\nInterests: ${portfolioData.interests.join(', ')}\nHobbies: ${portfolioData.hobbies.join(', ')}\nCareer Summary: ${portfolioData.careerSummary}\nSkills: ${portfolioData.skills.join(', ')}\nWork Samples: ${portfolioData.workSamples.join(', ')}\nAwards: ${portfolioData.awards.join(', ')}\nHonors: ${portfolioData.honors.join(', ')}\nServices Done: ${portfolioData.services.join(', ')}`;
        setQrValue(portfolioSummary);
        setShowQRCode(true);
    };

    return (
        <div style={{
            backgroundImage: "url('your-image-url.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
            padding: '20px',
            boxSizing: 'border-box',
        }}>
            <div style={{
                maxWidth: '800px',
                width: '100%',
                padding: '2rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#ffc107',
                    marginBottom: '1rem',
                    fontSize: '2rem',
                }}>Create New Portfolio</h2>
                <form onSubmit={handleSubmit}>
                    {['name', 'dob', 'interests', 'hobbies', 'careerSummary', 'skills', 'workSamples', 'awards', 'honors', 'services'].map((field, index) => (
                        <div key={index} style={{ marginBottom: '1.2rem' }}>
                            <label style={{
                                display: 'block',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#ffc107',
                            }}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
                            <input
                                type={field === 'dob' ? 'date' : 'text'}
                                name={field}
                                value={Array.isArray(portfolioData[field]) ? portfolioData[field].join(', ') : portfolioData[field]}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.6rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    backgroundColor: '#555',
                                    color: '#fff',
                                }}
                            />
                        </div>
                    ))}

                    <button type="submit" style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.8rem',
                        backgroundColor: '#ffc107',
                        color: '#333',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}>Create Portfolio</button>
                </form>

                {message && <div style={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    fontSize: '1rem',
                    color: 'lightgreen',
                }}>{message}</div>}

                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    backgroundColor: '#444',
                    borderRadius: '8px',
                    color: '#fff',
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        color: '#ffc107',
                        marginBottom: '1rem',
                    }}>Portfolio Preview</h2>
                    <div style={{ fontSize: '0.95rem', color: '#ddd' }}>
                        {Object.keys(portfolioData).map((field, index) => (
                            <p key={index}>
                                <strong>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {Array.isArray(portfolioData[field]) ? portfolioData[field].join(', ') : portfolioData[field]}
                            </p>
                        ))}
                    </div>

                    <button type="button" onClick={handleGenerateQRCode} style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.8rem',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '1.2rem',
                        transition: 'background-color 0.3s ease',
                    }}>
                        Generate QR Code
                    </button>

                    {showQRCode && (
                        <div style={{
                            textAlign: 'center',
                            marginTop: '1.5rem',
                        }}>
                            <h2 style={{ color: '#ffc107' }}>Your QR Code:</h2>
                            <QRCodeCanvas value={qrValue} size={128} />
                            <p style={{ color: '#ccc' }}>Scan this QR code to view your portfolio summary!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCreation;
