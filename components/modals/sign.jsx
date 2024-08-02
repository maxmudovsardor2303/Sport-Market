import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { login } from '@/service/auth.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 550,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

// Validation schema
const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const KeepMountedModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    const status = await login(values);
    console.log(status);
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" className='text-[#000]' variant="h4" component="h2" sx={{ mb: 2 }}>
          Вход в аккаунт
        </Typography>
        <Typography id="keep-mounted-modal-description" className='text-[#000]' sx={{ mb: 3 }}>
          Если Вы не зарегистрированы, нажмите кнопку <span className='text-[#FBD029] cursor-pointer'>"Регистрация"</span>
        </Typography>
        <Formik
          initialValues={{
            email: 'xasannosirov094@gmail.com',
            password: 'Sehtols@01',
          }}
          validationSchema={SignInValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4'>
              <Field
                as={TextField}
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <ErrorMessage name="email" component="div" className="text-red-600" />
              <Field
                as={TextField}
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                name="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <ErrorMessage name="password" component="div" className="text-red-600" />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#FBD029',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#FBD029',
                  },
                  height: '40px',
                  borderRadius: '5px',
                  fontSize: '0.875rem',
                }}
              >
                Войти
              </Button>
              <div className='flex justify-center sm:justify-start mt-2'>
                <p className="cursor-pointer text-[#917BFF]">Забыли пароль!</p>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default KeepMountedModal;
