"use client"
import {useSearchParams} from "next/navigation";
import {Field, Form, Formik} from "formik";
import cls from "./Payment.module.scss";

function PaymentPage() {
    const params = useSearchParams();
    const products = params.get("products");
    const img = params.get("img");
    const cost = params.get("amount")
    const decodedImg = img ? atob(img) : null;

    return (
        <Formik
            initialValues={{
                email: "",
                cardNumber: "",
                expires: "",
                cvc: "",
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({values, touched,errors}) => (
                <Form className={cls.paymentForm}>
                    <div>Бронь номера в отеле {products}</div>
                    <h2>На сумму {cost}</h2>
                    {decodedImg && <img style={{width: "10px", height: "10px"}} src={decodedImg} alt="img"/>}
                    {errors.email && touched.email && errors.email}
                    <Field
                        type="email"
                        name="email"
                        value={values.email}
                    />
                </Form>
            )}
        </Formik>
    );
}

export default PaymentPage;
