import React, { Component } from '_react@16.8.6@react';
import { Link } from '_react-router-dom@4.3.1@react-router-dom';

export default class BasicNotFound extends Component {
  render() {
    return (
      <div className="basic-not-found" style={styles.notFoundContainer}>
        <div style={styles.notfoundContent}>
          <div className="prompt">
            <h3 style={styles.title}>Sorry Page Lost</h3>
            <p style={styles.description}>
              Page Not Found
              <Link to="/">Home Page</Link>
              Continue
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  notFoundContainer: {
    minHeight: '100vh',
    background: '#fff',
  },
  notfoundContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
  },
  imgNotfound: {
    marginRight: '50px',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    margin: '20px 0',
  },
  description: {
    color: '#666',
    fontSize: '16px',
  },
};
