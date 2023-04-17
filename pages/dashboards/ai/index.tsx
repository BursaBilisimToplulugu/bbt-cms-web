import Head from 'next/head';
import SidebarLayout from '@/modules/common/layouts/SidebarLayout';
import { useState } from 'react';
import PageHeader from '@/modules/common/content/Dashboards/Tasks/PageHeader';
import Footer from '@/modules/common/components/Footer';
import {
  Box,
  Button,
  Container, IconButton, Input, Tooltip,
} from '@mui/material';
import PageTitleWrapper from '@/modules/common/components/PageTitleWrapper';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import axios from 'axios';

const BUCKET_URL = "https://ai-profile.s3.amazonaws.com/";


function AIImage() {
  const [file, setFile] = useState<any>();
  const [uploadingStatus, setUploadingStatus] = useState<any>();
  const [uploadedFile, setUploadedFile] = useState<any>();

  const storeFile=(e) =>{
    setFile(e.target.files[0]);
  }
  const uploadFile = async () => {
    setUploadingStatus("Uploading the file to AWS S3");

    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name,
      type: file.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + file.name);
    setFile(null);
  };
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} display="flex" alignItems="center">
            <Input accept="image/*" id="messenger-upload-file"
            onChange={(e)=>storeFile(e)}
            type="file" />
            <Tooltip arrow placement="top" title="Attach a file">
              <label htmlFor="messenger-upload-file">
                <IconButton sx={{ mx: 1 }} color="primary" component="span">
                  <AttachFileTwoToneIcon fontSize="small" />
                </IconButton>
              </label>
            </Tooltip>
            <Button startIcon={<SendTwoToneIcon />} variant="contained" onClick={uploadFile}>
              Send
            </Button>
            {uploadingStatus && <p>{uploadingStatus}</p>}
            {uploadedFile && <img src={uploadedFile} />}

            <h1>API Example</h1>
            <p>The examples below show responses from the example API endpoints.</p>
            <p><em>You must be signed in to see responses.</em></p>
            <h2>Session</h2>
            <p>/api/examples/session</p>
            <iframe src="/api/examples/session" />
            <h2>JSON Web Token</h2>
            <p>/api/examples/jwt</p>
            <iframe src="/api/examples/jwt" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

AIImage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default AIImage;
