import { render, screen } from '@testing-library/react';
import { getFireStore,collection,addDoc,serverTimestamp } from 'firebase/firestore';
import App from './App';

const db = getFireStore();
async function addArticle(title,content,userId) {
  await addDoc(collection(db,"blogs"),{
    title,
    content,
    createdAt; serverTimestamp(),
    authorId:userId
  });
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
