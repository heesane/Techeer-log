import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
    let res = http.get('http://backend1:8080/api/v1/auth/anonymous');
    check(res, {
        'status was 200 http://backend1:8080/api/v1/auth/anonymous': (r) => r.status === 200,
    });
}
