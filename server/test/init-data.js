import mongoose from 'mongoose';
import AuthorityData from '../modules/auth-module/models/authority.js';
import DepartmentData from '../modules/auth-module/models/department.js';
import UserData from '../modules/auth-module/models/user.js';

import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URL, {
    useNewUrlPArser: true,
    useUnifiedTopology: true
}).then(
    async () => {
        const auth1 = new AuthorityData({
            id: 1, 
            name: 'root',
            description: '루트'
        });
        const auth2 = new AuthorityData({
            id: 2, 
            name: 'admin',
            description: '관리자'
        });
        const auth3 = new AuthorityData({
            id: 3, 
            name: 'normal',
            description: '일반'
        });
        const auth4 = new AuthorityData({
            id: 4, 
            name: 'guest',
            description: '게스트'
        });

        const department1 = new DepartmentData({
            id: 1,
            name: 'DevH.Co',
            description: '회사명',
            department: null,
            depth: 0,
        });
        const department2 = new DepartmentData({
            id: 2,
            name: '대표이사',
            description: '대표',
            department: department1,
            depth: department1.depth + 1,
        });
        const department3 = new DepartmentData({
            id: 3,
            name: '기획',
            description: '기획',
            department: department1,
            depth: department1.depth + 1,
        });
        const department4 = new DepartmentData({
            id: 4,
            name: '감사',
            description: '감사',
            department: department1,
            depth: department1.depth + 1,
        });
        const department5 = new DepartmentData({
            id: 5,
            name: '경영',
            description: '경영',
            department: department1,
            depth: department1.depth + 1,
        });
        const department6 = new DepartmentData({
            id: 6,
            name: '영업',
            description: '영업',
            department: department1,
            depth: department1.depth + 1,
        });
        const department7 = new DepartmentData({
            id: 7,
            name: '연구소',
            description: '연구소',
            department: department1,
            depth: department1.depth + 1,
        });
        const department8 = new DepartmentData({
            id: 8,
            name: '인사',
            description: '인사',
            department: department5,
            depth: department5.depth + 1,
        });
        const department9 = new DepartmentData({
            id: 9,
            name: '재무',
            description: '재무',
            department: department5,
            depth: department5.depth + 1,
        });
        const department10 = new DepartmentData({
            id: 10,
            name: '국내영업',
            description: '국내영업',
            department: department6,
            depth: department6.depth + 1,
        });
        const department11 = new DepartmentData({
            id: 11,
            name: '해외영업',
            description: '해외영업',
            department: department6,
            depth: department6.depth + 1,
        });
        const department12 = new DepartmentData({
            id: 12,
            name: '1연구소',
            description: '1연구소',
            department: department7,
            depth: department7.depth + 1,
        });
        const department13 = new DepartmentData({
            id: 13,
            name: '2연구소',
            description: '2연구소',
            department: department7,
            depth: department7.depth + 1,
        });
        const department14 = new DepartmentData({
            id: 14,
            name: '3연구소',
            description: '3연구소',
            department: department7,
            depth: department7.depth + 1,
        });
        const department15 = new DepartmentData({
            id: 15,
            name: 'C개발',
            description: 'C개발',
            department: department12,
            depth: department12.depth + 1,
        });
        const department16 = new DepartmentData({
            id: 16,
            name: 'C설계',
            description: 'C설계',
            department: department12,
            depth: department12.depth + 1,
        });
        const department17 = new DepartmentData({
            id: 17,
            name: 'JAVA개발',
            description: 'JAVA개발',
            department: department13,
            depth: department13.depth + 1,
        });
        const department18 = new DepartmentData({
            id: 18,
            name: 'JAVA설계',
            description: 'JAVA설계',
            department: department13,
            depth: department13.depth + 1,
        });
        const department19 = new DepartmentData({
            id: 19,
            name: 'QA',
            description: 'QA',
            department: department14,
            depth: department14.depth + 1,
        });

        const user1 = new UserData({
            id: 1,
            username: 'root',
            password: '$2a$10$7/OVVzZfA9wI1q4viJVmkefkzF7W7bgzwXoBJUXl2C4IVCVMz4tNi' /* root */,
            name: '김루트',
            nickname: '루트김',
            email: 'root@devh.com',
            phone: '000-0000-0001',
            authorities: [auth1, auth2, auth3, auth4]
        });
        const user2 = new UserData({
            id: 2,
            username: 'admin',
            password: '$2a$10$jGszCh15WEW3jxzoLKdNMuFt7ZV53cYPfPnrZH1w7RmZJnGnz3lDC' /* admin */,
            name: '김관리',
            nickname: '관리김',
            email: 'admin@devh.com',
            phone: '000-0000-0002',
            authorities: [auth2, auth3, auth4]
        });
        const user3 = new UserData({
            id: 3,
            username: 'normal',
            password: '$2a$10$mvtG3BrlehPfFLDz5.XNveoRYK1LJhp5yudKuXKiwfiSyjb30kk1i' /* normal */,
            name: '김일반',
            nickname: '일반김',
            email: 'normal@devh.com',
            phone: '000-0000-0003',
            authorities: [auth3, auth4]
        });
        const user4 = new UserData({
            id: 4,
            username: 'guest',
            password: '$2a$10$EWTFu2lWmFvzmP50VtXpPuAdOEESre0ta6FFkxaV/ED9VVcRh/0sW' /* guest */,
            name: '김손님',
            nickname: '손님김',
            email: 'guest@devh.com',
            phone: '000-0000-0004',
            authorities: [auth4]
        });


        await auth1.save();
        await auth2.save();
        await auth3.save();
        await auth4.save();

        await department1.save();
        await department2.save();
        await department3.save();
        await department4.save();
        await department5.save();
        await department6.save();
        await department7.save();
        await department8.save();
        await department9.save();
        await department10.save();
        await department11.save();
        await department12.save();
        await department13.save();
        await department14.save();
        await department15.save();
        await department16.save();
        await department17.save();
        await department18.save();
        await department19.save();

        await user1.save();
        await user2.save();
        await user3.save();
        await user4.save();

        console.log('done!');
    }
).catch(
    err => console.log(err.message)
)
