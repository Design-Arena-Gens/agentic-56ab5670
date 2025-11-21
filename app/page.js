'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    jobTitle: 'Mental Health Act Administrator',
    yearsExperience: '5',
    complexCases: '',
    caseManagement: '',
    mhaKnowledge: '',
    communication: '',
    specificExamples: ''
  })

  const [generatedExperience, setGeneratedExperience] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateExperience = () => {
    const { jobTitle, yearsExperience, complexCases, caseManagement, mhaKnowledge, communication, specificExamples } = formData

    let experience = `Professional Experience Summary\n\n`

    experience += `I bring ${yearsExperience} years of significant relevant experience in mental health services, specifically in roles requiring expert knowledge of the Mental Health Act and its practical application.\n\n`

    if (complexCases) {
      experience += `Complex Case Experience:\n${complexCases}\n\n`
    } else {
      experience += `Complex Case Experience:\nI have extensive experience managing highly complex mental health cases involving multiple risk factors, including patients with co-morbid conditions, those requiring urgent detention assessments, and individuals subject to Community Treatment Orders. My work has consistently involved navigating challenging legal frameworks whilst maintaining patient-centered approaches and ensuring compliance with Section 12(2) approved clinician requirements.\n\n`
    }

    if (caseManagement) {
      experience += `Case Management Expertise:\n${caseManagement}\n\n`
    } else {
      experience += `Case Management Expertise:\nI have successfully managed diverse caseloads involving patients detained under various sections of the Mental Health Act, coordinating multi-disciplinary teams, liaising with Approved Mental Health Professionals (AMHPs), and ensuring timely tribunal preparations and statutory documentation. My case management approach emphasizes thorough assessment, clear documentation, and proactive communication with all stakeholders including families, legal representatives, and clinical teams.\n\n`
    }

    if (mhaKnowledge) {
      experience += `Mental Health Act Knowledge:\n${mhaKnowledge}\n\n`
    } else {
      experience += `Mental Health Act Knowledge:\nI possess extensive and current knowledge of the Mental Health Act 1983 (as amended by the Mental Health Act 2007), the MHA Code of Practice, and associated legislation including the Mental Capacity Act 2005, Human Rights Act 1998, and relevant case law. I regularly provide guidance on complex detention scenarios, nearest relative matters, Section 17 leave arrangements, and discharge procedures. I maintain my knowledge through continuous professional development, attending regular training updates, and engaging with policy guidance from the Care Quality Commission and Department of Health.\n\n`
    }

    if (communication) {
      experience += `Communication and Negotiation Skills:\n${communication}\n\n`
    } else {
      experience += `Communication and Negotiation Skills:\nI am highly skilled in providing and receiving complex, sensitive, and sometimes contentious information to diverse audiences. This includes explaining detention rights to distressed patients and families, negotiating care pathways with resistant or skeptical professionals, and managing conflicting priorities between clinical teams, legal representatives, and service commissioners. I have successfully mediated in challenging situations where families disputed treatment decisions, and have presented complex cases to hospital managers' hearings and Mental Health Tribunals. My approach combines empathy with clarity, ensuring that legal requirements are met whilst maintaining therapeutic relationships.\n\n`
    }

    if (specificExamples) {
      experience += `Specific Examples:\n${specificExamples}\n\n`
    }

    experience += `Core Competencies:\n• Expert application of Mental Health Act 1983 across all sections\n• Risk assessment and management in high-acuity scenarios\n• Multi-agency collaboration and stakeholder engagement\n• Statutory documentation and legal compliance\n• Crisis intervention and conflict resolution\n• Advocacy for patient rights whilst maintaining safety\n• Training and mentoring junior staff on MHA procedures\n• Quality assurance and policy development\n\n`

    experience += `I am committed to delivering high-quality, legally compliant mental health services that respect patient dignity and autonomy whilst safeguarding vulnerable individuals and the wider community.`

    setGeneratedExperience(experience)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedExperience)
    alert('Copied to clipboard!')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#1a202c',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Mental Health Professional Experience Generator
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#718096',
          marginBottom: '30px',
          fontSize: '16px'
        }}>
          Generate comprehensive job experience statements for Mental Health Act roles
        </p>

        <div style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Years of Experience
            </label>
            <input
              type="number"
              name="yearsExperience"
              value={formData.yearsExperience}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Complex Cases Experience (Optional - leave blank for auto-generated content)
            </label>
            <textarea
              name="complexCases"
              value={formData.complexCases}
              onChange={handleChange}
              placeholder="Describe your experience with complex mental health cases..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                minHeight: '100px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Case Management Experience (Optional)
            </label>
            <textarea
              name="caseManagement"
              value={formData.caseManagement}
              onChange={handleChange}
              placeholder="Describe your case management experience..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                minHeight: '100px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Mental Health Act Knowledge (Optional)
            </label>
            <textarea
              name="mhaKnowledge"
              value={formData.mhaKnowledge}
              onChange={handleChange}
              placeholder="Describe your knowledge of Mental Health Act and legislation..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                minHeight: '100px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Communication & Negotiation Experience (Optional)
            </label>
            <textarea
              name="communication"
              value={formData.communication}
              onChange={handleChange}
              placeholder="Describe your experience with complex communication and negotiation..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                minHeight: '100px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
              Specific Examples or Additional Information (Optional)
            </label>
            <textarea
              name="specificExamples"
              value={formData.specificExamples}
              onChange={handleChange}
              placeholder="Add any specific examples or additional information..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px',
                minHeight: '100px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            onClick={generateExperience}
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Generate Experience Statement
          </button>
        </div>

        {generatedExperience && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: '#f7fafc',
            borderRadius: '8px',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', margin: 0 }}>
                Generated Experience Statement
              </h2>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '8px 16px',
                  background: '#48bb78',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Copy to Clipboard
              </button>
            </div>
            <div style={{
              whiteSpace: 'pre-wrap',
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#2d3748'
            }}>
              {generatedExperience}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
