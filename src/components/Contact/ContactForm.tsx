'use client';
import { contactPageData } from '@/utils/content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../Common/Button';
import InputField from '../Common/InputField';
import Image from 'next/image';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  subject: Yup.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject cannot exceed 100 characters')
    .required('Subject is required'),
  message: Yup.string(),
});

const ContactForm = () => {
  const { formData } = contactPageData;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // try {
      //   const response = await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(values),
      //   });
      //   const data = await response.json();
      //   if (response.ok) {
      //     console.log(data.message);
      //   } else {
      //     console.error(data.message);
      //   }
      // } catch (error) {
      //   console.error('An error occurred:', error);
      // }
    },
  });
  return (
    <div className="relative overflow-x-hidden px-5">
      <div className="relative mx-auto max-w-[1440px]">
        <form
          onSubmit={formik.handleSubmit}
          className="relative mx-auto flex w-full max-w-[896px] flex-col gap-[46px] py-[128px]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex w-full flex-col gap-2">
                <InputField
                  labelText={formData?.name?.label}
                  name={formData?.name?.label}
                  error={formik?.errors?.name}
                  placeholder={formData?.name?.placeholder}
                  value={formik?.values?.name}
                  onChange={formik.handleChange}
                  touched={formik?.touched?.name}
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <InputField
                  labelText={formData?.email?.label}
                  name={formData?.email?.label}
                  error={formik?.errors?.email}
                  placeholder={formData?.email?.placeholder}
                  value={formik?.values?.email}
                  type={formData?.email?.type}
                  onChange={formik.handleChange}
                  touched={formik?.touched?.email}
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <InputField
                labelText={formData?.subject?.label}
                name={formData?.subject?.label}
                error={formik?.errors?.subject}
                placeholder={formData?.subject?.placeholder}
                value={formik?.values?.subject}
                onChange={formik.handleChange}
                touched={formik?.touched?.subject}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <InputField
                labelText={formData?.message?.label}
                name={formData?.message?.label}
                error={formik?.errors?.message}
                placeholder={formData?.message?.placeholder}
                value={formik?.values?.message}
                onChange={formik.handleChange}
                touched={formik?.touched?.message}
              />
            </div>
          </div>
          <Button label={formData?.btnText} />
          {formData?.leftElement && (
            <Image
              src={formData?.leftElement}
              alt="plane"
              width={145}
              height={94.04}
              className="absolute -left-40 top-1/2 -translate-y-1/2 -scale-x-90"
            />
          )}
          {formData?.rightElement && (
            <Image
              src={formData?.rightElement}
              alt={'sparrow'}
              width={82.28}
              height={59.18}
              className="absolute -right-24 top-20"
            />
          )}
        </form>
      </div>
      <div className="absolute bottom-0 right-0 flex items-end">
        <Image
          src={formData?.elements[0]?.source}
          alt={formData?.elements[0]?.alt}
          width={formData?.elements[0]?.width}
          height={formData?.elements[0]?.height}
          className="-mr-5 w-20 object-cover lg:-mr-12 lg:size-max"
        />
        <Image
          src={formData?.elements[1]?.source}
          alt={formData?.elements[1]?.alt}
          width={formData?.elements[1]?.width}
          height={formData?.elements[1]?.height}
          className="-mr-5 w-28 object-cover lg:-mr-12 lg:size-max"
        />
        <Image
          src={'/svg/multiplebooks.svg'}
          alt={formData?.elements[2]?.alt}
          width={formData?.elements[2]?.width}
          height={formData?.elements[2]?.height}
          className="size-24 object-cover lg:size-max"
        />
      </div>
    </div>
  );
};

export default ContactForm;
