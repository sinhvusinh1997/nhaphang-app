import jwt_decode from 'jwt-decode';
import moment from 'moment';

class Format {
  // format date
  parseVNDate = (date: Date, format: string = 'DD/MM/YYYY HH:mm:ss') => {
    if (!date) return '--';
    return moment(date).format(format);
  };

  parseTime = (date: Date) => {
    if (!date) return '--';
    return moment(date).format('hh:mm:ss A');
  };

  // lấy thông tin từ token
  getJWTDecode = (
    token: string,
  ): {
    exp: number;
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata': string;
    iat: number;
    nbf: number;
  } => jwt_decode(token);

  // format tiền việt nam
  getVND = (price: number, suffix: string = ' VNĐ') => {
    if (Number.isInteger(price)) {
      return (
        (price?.toString() || '0').replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        suffix
      );
    }
    return price;
  };
}

export const _format = new Format();
