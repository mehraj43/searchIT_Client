import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Banner = ({ companyData }) => {
  //   console.log('companyData', companyData);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      {!!companyData &&
        companyData.map((item) => {
          //   const url = item.arr.imageUrl;
          //   const regex = /\/(open\?id=|file\/d\/)([a-zA-Z0-9_-]+)/;
          //   const fileId = url.match(regex)[2];
          //   console.log(fileId);

          return (
            <Card style={{ width: '18rem' }} key={item._id}>
              <Card.Img
                variant='top'
                src={`https://www.shutterstock.com/image-photo/hand-writing-text-sales-force-260nw-395131819.jpg`}
                style={{ height: '180px' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className='px-2' style={{ backgroundColor: '#ccc' }}>
                  {item.arr.headline}
                </Card.Text>
                <Card.Text>{item.arr.description}</Card.Text>
                <Button variant='primary'>{item.arr.CTA}</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Banner;
