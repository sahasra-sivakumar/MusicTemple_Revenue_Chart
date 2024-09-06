import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Year 1', govGrants: 50, research: 10, education: 5, digital: 2, consultancy: 3, licensing: 1, events: 4, publications: 2 },
  { year: 'Year 2', govGrants: 45, research: 15, education: 8, digital: 4, consultancy: 5, licensing: 3, events: 6, publications: 3 },
  { year: 'Year 3', govGrants: 40, research: 20, education: 12, digital: 7, consultancy: 8, licensing: 6, events: 8, publications: 4 },
  { year: 'Year 4', govGrants: 35, research: 25, education: 15, digital: 10, consultancy: 10, licensing: 10, events: 10, publications: 5 },
  { year: 'Year 5', govGrants: 30, research: 30, education: 20, digital: 15, consultancy: 12, licensing: 15, events: 12, publications: 6 }
];

const RevenueChart = () => (
  <ResponsiveContainer width="100%" height={500}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -10 }} />
      <YAxis label={{ value: 'Revenue (₹ Crores)', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend verticalAlign="top" height={36}/>
      <Bar dataKey="govGrants" stackId="a" fill="#8884d8" name="Government Grants" />
      <Bar dataKey="research" stackId="a" fill="#82ca9d" name="Research Funding" />
      <Bar dataKey="education" stackId="a" fill="#ffc658" name="Educational Programs" />
      <Bar dataKey="digital" stackId="a" fill="#ff7300" name="Digital Subscriptions" />
      <Bar dataKey="consultancy" stackId="a" fill="#a4de6c" name="Consultancy Services" />
      <Bar dataKey="licensing" stackId="a" fill="#d0ed57" name="Technology Licensing" />
      <Bar dataKey="events" stackId="a" fill="#8dd1e1" name="Events and Workshops" />
      <Bar dataKey="publications" stackId="a" fill="#83a6ed" name="Publications" />
    </BarChart>
  </ResponsiveContainer>
);

export default RevenueChart;
