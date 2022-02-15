import React, { Component } from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CContainer,
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'


export class addEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: {
                collectionName: "employee",
                content: {
                    name: "",
                    surname: "",
                    address: "",
                    
                }
            }
        }
    }
    collectionOnChangeHandler(e){
        const{collection}=this.state;
        collection.content[e.target.name]=e.target.value;
        this.setState({
            collection
        })
    }
    async addEmployeeOnClickHandler(){
        console.log(this.state.collection)
        
        var data=null
        var config = {
            method: 'post',
            url: "http://178.157.15.162:5004/add/collection",
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTk0NywiY2xpZW50SWQiOiI2MWJhNjQzYWE2Njg5OTIxZTdhZDQ3MjUiLCJyb2xlIjoiYWRtaW4iLCJhcHBsaWNhdGlvbklkIjoiYmZmMzI5YTItY2IxMi00ODgyLWI3NjAtY2ViZGJlMmMyMjM2IiwiZXhwIjoxNjQ0OTU1MTczfQ.044XJlf17IPT3S5RptLCNZ0pDBsY33XbZZw_3Uqdkxg",
                'Content-Type': 'application/json'
            },
            data: this.state.collection
        };
        await axios(config).then(
            function (response) {
                data = response.data
            }
        ).catch(
            function (error) {
               console.log(error);
            }
        )
        if(data!=null){
            toast.success("Employee Saved", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const collectionCopy = {
                collectionName: "employee",
                content: {
                    name: "",
                    surname: "",
                    address: "",
                    
                }
            }
            this.setState({collection:collectionCopy})
        }else{
            toast.error("Unexpected Error", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    render() {
        return (
            <CContainer>
                <ToastContainer/>
                <CCard>
                <CCardHeader style={{ color: '#4f5d73', backgroundColor: "#fff" }} component="h5" className='p-2'>Add Employee</CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol sm={12} md={6}>
                                <CForm id="ff">
                                    <CFormLabel htmlFor="name">Name</CFormLabel>
                                    <CFormInput type="text" required id="name" name="name" value={this.state.collection.content.name} onChange={this.collectionOnChangeHandler.bind(this)} />
                                    <CFormLabel htmlFor="surname">Surname</CFormLabel>
                                    <CFormInput type="text" required id="surname" name="surname" value={this.state.collection.content.surname} onChange={this.collectionOnChangeHandler.bind(this)} />
                                    <CFormLabel htmlFor="address">Address</CFormLabel>
                                    <CFormTextarea id="address" required rows="3" name="address" value={this.state.collection.content.address} onChange={this.collectionOnChangeHandler.bind(this)} />
                                </CForm>
                            </CCol>
                        </CRow>
                        <CRow>
                        <CCol sm={12} md={6}>
                            <CButton onClick={this.addEmployeeOnClickHandler.bind(this)} className="mt-2">Save Employee</CButton>
                        </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CContainer>
        );
    }
}
export default addEmployee